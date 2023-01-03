import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { NavLink } from "react-router-dom";
import { IconKeys } from "@/common/assets/icons";
import { Icon } from "@/common/components/Icon";
import classNames from "classnames";
import styles from "./Anchor.module.sass";

interface Props {
    to: string
    icon: IconKeys
    className?: string
    children: string
    variant?: "primary" | "secondary"

    [x: string]: any
}

export const Anchor: FC<Props> = (props) => {
    const { to, icon, className, children, variant = "primary", ...rest } = props;

    return (
        <NavLink
            className={({ isActive }) => classNames(
                styles.anchor,
                styles[variant],
                { [styles.active]: isActive },
                className
            )}
            to={to}
            {...rest}
        >
            <Icon className={styles.icon} name={icon}/>
            <Typography className={styles.text} color="secondary">{children}</Typography>
        </NavLink>
    );
};
