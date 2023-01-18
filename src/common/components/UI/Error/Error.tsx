import React, { FC } from "react";
import styles from "./Error.module.sass";

interface Props {
    children: string
}

export const Error: FC<Props> = ({ children }) => (
    <span className={styles.error}>
        {children}
    </span>
);
