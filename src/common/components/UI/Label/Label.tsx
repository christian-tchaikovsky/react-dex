import React, { FC } from "react";
import styles from "./Label.module.sass";

interface Props {
    children: React.ReactNode
}

export const Label: FC<Props> = ({ children }) => (
    <label className={styles.label}>{children}</label>
);
