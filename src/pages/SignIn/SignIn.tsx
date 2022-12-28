import React, { FC } from "react";
import { Link } from "@/components/UI/Link";
import { Input } from "@/components/UI/Input";
import { Button } from "@/components/UI/Button";
import { Password } from "@/components/UI/Password";
import { Typography } from "@/components/UI/Typography";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Banner from "@/assets/image/im-sign-up-banner.png";
import styles from "./SignIn.module.sass";

interface Inputs {
    login: string
    password: string
}

const validationSchema = Yup.object<Record<keyof Inputs, Yup.AnySchema>>({
    login: Yup.string()
        .trim()
        .required("Required")
        .matches(/^[a-zA-Z]+$/, "Invalid character entered")
        .min(5, "Login must be at least 5 characters")
        .max(24, "Login must be at most 24 characters"),
    password: Yup.string()
        .trim()
        .required("Required")
        .matches(/^[a-zA-Z0-9]+$/, "Invalid character entered")
        .min(5, "Password must be at least 5 characters")
        .max(24, "Password must be at most 24 characters")
});

export const SignIn: FC = () => {
    const { control, handleSubmit } = useForm<Inputs>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            login: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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
