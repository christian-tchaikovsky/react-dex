import React, { FC } from "react";
import styles from "./ToastLayout.module.sass";

interface Props {
    children: React.ReactNode
}

export const ToastLayout: FC<Props> = ({ children }) => (
    <div className={styles["notification-layout"]}>
        {children}
    </div>
);
