import React, { FC } from "react";
import { useNavigationContext } from "@/common/contexts/NavigationContext";
import { Typography } from "@/common/components/UI/Typography";
import { Condition } from "@/common/components/Condition";
import { IUser } from "@/common/interfaces/IUser";
import { Icon } from "@/common/components/Icon";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";
import styles from "./Header.module.sass";
import classNames from "classnames";

export const Header: FC = () => {
    const navigate = useNavigate();
    const { mobile, onChangeHandler } = useNavigationContext();
    const user: IUser = JSON.parse(localStorage.getItem("user") as string);

    const onHandleNavigate = (): void => {
        navigate(paths.main);
    };
    
    return (
        <header className={styles.header}>
            <Condition condition={mobile} otherwise={null}>
                <div
                    onClick={onChangeHandler}
                    className={styles["button-inner"]}
                >
                    <div className={styles["button-menu"]} />
                </div>
            </Condition>
            <Icon
                name="logo"
                onClick={onHandleNavigate}
                className={classNames(styles.logo, { [styles.center]: mobile })}
            />
            <Condition condition={!mobile} otherwise={null}>
                <div className={styles.user}>
                    <Typography className={styles.name} size="small">{user.name}</Typography>
                    <Link className={styles.avatar} to={paths.profile}>
                        {user.avatarUrl
                            ? <img className={styles.image} src={user.avatarUrl} alt="avatar"/>
                            : <Icon className={styles.image} name="profile"/>
                        }
                    </Link>

                </div>
            </Condition>
        </header>
    );
};
