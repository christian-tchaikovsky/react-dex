import React, { FC } from "react";
import styles from "./Loader.module.sass";

export const Loader: FC = () => (
    <div className={styles.wrapper}>
        <div className={styles["lds-ripple"]}>
            <div />
            <div />
        </div>
    </div>
);
