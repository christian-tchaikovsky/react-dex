import React, { FC } from "react";
import styles from "./Label.module.sass";

interface Props {
    children: string
}

export const Label: FC<Props> = ({ children }) => (
    <label className={styles.label}>{children}</label>
);
