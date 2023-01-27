import React, { FC } from "react";
import styles from "./AuthLayout.module.sass";

interface Props {
    image: string
    children: React.ReactNode
}

export const AuthLayout: FC<Props> = (props) => {
    const { image, children } = props;

    return (
        <div className={styles.auth}>
            <div className={styles.left}>
                {children}
            </div>
            <div className={styles.right}>
                <div className={styles["banner-inner"]}>
                    <img className={styles.banner} src={image} alt="banner"/>
                </div>
            </div>
        </div>
    );
};
