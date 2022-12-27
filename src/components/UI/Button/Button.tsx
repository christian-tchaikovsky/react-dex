import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.sass";

interface Props {
    children: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    icon?: string
}

export const Button: FC<Props> = (props) => {
    const { children, className, onClick, icon } = props;

    return (
        <button
            onClick={onClick}
            className={classNames(styles.button, className)}
        >
            {children}
            {icon}
        </button>
    );
};
