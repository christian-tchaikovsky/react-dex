import React, { FC } from "react";
import { Link } from "@/components/UI/Link";
import { Input } from "@/components/UI/Input";
import { Button } from "@/components/UI/Button";
import { Password } from "@/components/UI/Password";
import { Typography } from "@/components/UI/Typography";
import { addNotification } from "@/store/reducers/notificationReducer";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { validationSchema } from "@/pages/SignIn/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginRequest } from "@/models/ILogin";
import { useAppDispatch } from "@/hooks";
import { login } from "@/api/login";
import Banner from "@/assets/image/im-sign-up-banner.png";
import styles from "./SignIn.module.sass";

export const SignIn: FC = () => {
    const dispatch = useAppDispatch();
    const { control, handleSubmit } = useForm<ILoginRequest>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            login: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<ILoginRequest> = async data => {
        try {
            const res = await login(data);
            const responseData = res.data;
            localStorage.setItem("user", JSON.stringify(responseData));
        } catch {
            dispatch(addNotification("User with the specified username / password was not found"));
        }
    };

    return (
        <div className={styles.auth}>
            <div className={styles.left}>
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
            </div>
            <div className={styles.right}>
                <img className={styles.banner} src={Banner} alt="Banner"/>
            </div>
        </div>
    );
};
