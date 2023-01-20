import React, { FC } from "react";
import styles from "./NotificationLayout.module.sass";

interface Props {
    children: React.ReactNode
}

export const NotificationLayout: FC<Props> = ({ children }) => (
    <div className={styles["notification-layout"]}>
        {children}
    </div>
);
