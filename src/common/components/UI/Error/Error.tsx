import React, { FC } from "react";
import styles from "./Error.module.sass";
import classNames from "classnames";

interface Props {
    children: string
    className?: string
}

export const Error: FC<Props> = ({ children, className }) => (
    <span className={classNames(styles.error, className)}>
        {children}
    </span>
);
