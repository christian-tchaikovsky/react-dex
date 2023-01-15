import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Loader.module.sass";

interface Props {
    className?: string
}

export const Loader: FC<Props> = ({ className }) => (
    <div className={classNames(styles.wrapper, className)}>
        <div className={styles["lds-ripple"]}>
            <div />
            <div />
        </div>
    </div>
);
