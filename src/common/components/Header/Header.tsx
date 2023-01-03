import React, { FC } from "react";
import { Icon } from "@/common/components/Icon";
import { Typography } from "@/common/components/UI/Typography";
import { Link } from "react-router-dom";
import { IUser } from "@/common/interfaces/IUser";
import { paths } from "@/routes/constants/paths";
import styles from "./Header.module.sass";

export const Header: FC = () => {
    const user: IUser = JSON.parse(localStorage.getItem("user") as string);

    return (
        <header className={styles.header}>
            <Icon className={styles.logo} name="logo"/>
            <div className={styles.user}>
                <Typography className={styles.name} size="small">{user.name}</Typography>
                <Link className={styles.avatar} to={paths.profile}>
                    {user.avatarUrl
                        ? <img className={styles.image} src={user.avatarUrl} alt="avatar"/>
                        : <Icon className={styles.image} name="profile"/>
                    }
                </Link>
            </div>
        </header>
    );
};
