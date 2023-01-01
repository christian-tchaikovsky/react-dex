import React, { FC } from "react";
import { AuthLayout } from "@/layouts/AuthLayout";
import { Typography } from "@/components/UI/Typography";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/UI/Input";
import { Password } from "@/components/UI/Password";
import { Button } from "@/components/UI/Button";
import { Checkbox } from "@/components/UI/Checkbox";
import { Link } from "@/components/UI/Link";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./schema";
import { IFields } from "@/models/IRegister";
import { register } from "@/api/register";
import { useAppDispatch } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { addNotification } from "@/store/reducers/notificationReducer";
import Banner from "@/assets/image/im-sign-up-banner.png";
import styles from "./Register.module.sass";

export const Register: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { control, handleSubmit } = useForm<IFields>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            userName: "",
            login: "",
            password: "",
            confirmPassword: "",
            agreement: false
        }
    });

    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const { userName, login, password } = data;
            const response = await register({ userName, login, password });
            const responseData = response.data;
            const { name, avatarUrl, token } = responseData;

            localStorage.setItem("user", JSON.stringify({ name, avatarUrl }));
            localStorage.setItem("token", token);
            dispatch(addNotification({
                message: "You have successfully registered",
                type: "success"
            }));

            navigate("/");
        } catch (e) {
            const error = e as AxiosError;

            if (error.response?.status === 409) {
                dispatch(addNotification(
                    "User with the specified login already exist"
                ));
            }
        }
    };
    
    return (
        <AuthLayout image={Banner}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Typography tag="h1" size="large" className={styles.title}>Sign Up</Typography>
                <Controller
                    control={control}
                    name="userName"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={onChange}
                            className={styles.input}
                            error={error?.message}
                            fullWidth
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="login"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Input
                            label="Login"
                            value={value}
                            onChange={onChange}
                            className={styles.input}
                            error={error?.message}
                            fullWidth
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Password
                            label="Password"
                            value={value}
                            onChange={onChange}
                            className={styles.input}
                            error={error?.message}
                            fullWidth
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Password
                            label="Enter your password again"
                            value={value}
                            onChange={onChange}
                            className={styles.input}
                            error={error?.message}
                            fullWidth
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="agreement"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Checkbox
                            label="I accept the agreement"
                            value={value}
                            onChange={onChange}
                            className={styles.checkbox}
                            error={error?.message}
                        />
                    )}
                />
                <Button type="submit" fullWidth>Sign Up</Button>
                <div className={styles.bottom}>
                    <Typography className={styles.typography} color="secondary">Already a member?</Typography>
                    <Link className={styles.link} to="/login">Sign in</Link>
                </div>
            </form>
        </AuthLayout>
    );
};
