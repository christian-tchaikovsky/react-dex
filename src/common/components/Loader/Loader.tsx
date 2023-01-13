import React, { FC } from "react";
import styles from "./Loader.module.sass";
import classNames from "classnames";

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
