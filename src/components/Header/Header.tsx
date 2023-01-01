import React, { FC } from "react";
import { Icon } from "@/components/Icon";
import { Typography } from "@/components/UI/Typography";
import { IUser } from "@/models/IUser";
import styles from "./Header.module.sass";

export const Header: FC = () => {
    const user: IUser = JSON.parse(localStorage.getItem("user") as string);

    return (
        <header className={styles.header}>
            <Icon className={styles.logo} name="logo"/>
            <div className={styles.user}>
                <Typography className={styles.name} size="small">{user.name}</Typography>
                <div className={styles.avatar}>
                    {
                        user.avatarUrl
                            ? <img className={styles.image} src={user.avatarUrl} alt="avatar"/>
                            : <Icon className={styles.image} name="profile"/>
                    }
                </div>
            </div>
        </header>
    );
};
