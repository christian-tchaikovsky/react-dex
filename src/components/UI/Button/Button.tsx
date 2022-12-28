import React, { FC } from "react";
import classNames from "classnames";
import { Icon } from "@/components/Icon";
import { IconKeys } from "@/assets/image";
import styles from "./Button.module.sass";

interface Props {
    children: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    icon?: IconKeys
    fullWidth?: boolean
    disabled?: boolean
    variant?: "primary" | "secondary"

    // all other props
    [x: string]: any
}

export const Button: FC<Props> = (props) => {
    const { children, className, onClick, icon, fullWidth, disabled, variant = "primary", ...rest } = props;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                styles.button,
                styles[variant],
                { [styles.fullWidth]: fullWidth },
                className
            )}
            {...rest}
        >
            <span className={styles.text}>{children}</span>
            <Icon className={styles.icon} name={icon}/>
        </button>
    );
};
