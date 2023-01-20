import React, { FC } from "react";
import { AuthLayout } from "@/modules/auth/layouts/AuthLayout";
import { Typography } from "@/common/components/UI/Typography";
import { Input } from "@/common/components/UI/Input";
import { Password } from "@/common/components/UI/Password";
import { Button } from "@/common/components/UI/Button";
import { Link } from "@/common/components/UI/Link";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { addToast } from "@/common/reducers/toastsReducer";
import { validationSchema } from "@/pages/Login/schema";
import { IFields } from "@/modules/auth/interfaces/ILogin";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/common/hooks";
import { login } from "@/api/login";
import { AxiosError } from "axios";
import { paths } from "@/routes/paths";
import Banner from "@/common/assets/image/im-sign-in-banner.png";
import styles from "./Login.module.sass";

export const Login: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { control, handleSubmit } = useForm<IFields>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            login: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const response = await login(data);
            const responseData = response.data;
            const { name, avatarUrl, token } = responseData;
            
            localStorage.setItem("user", JSON.stringify({ name, avatarUrl }));
            localStorage.setItem("token", token);
            dispatch(addToast({
                message: "You have successfully logged in",
                type: "success"
            }));

            navigate(paths.main);
        } catch (e) {
            const error = e as AxiosError;

            if (error.response?.status === 401) {
                dispatch(addToast(
                    "User with the specified username / password was not found"
                ));
            }
        }
    };

    return (
        <AuthLayout image={Banner}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Typography tag="h1" size="large" className={styles.title}>Sign In</Typography>
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
                <Button type="submit" fullWidth>Sign In</Button>
                <div className={styles.bottom}>
                    <Typography className={styles.typography} color="secondary">Not a member yet?</Typography>
                    <Link className={styles.link} to="/register">Sign up</Link>
                </div>
            </form>
        </AuthLayout>
    );
};
