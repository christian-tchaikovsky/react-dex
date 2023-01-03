import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import NotFound from "@/common/assets/image/im-no-match.png";
import styles from "./NoMatch.module.sass";

export const NoMatch: FC = () => (
    <div className={styles["no-match"]}>
        <div className={styles.content}>
            <img className={styles.image} src={NotFound} alt="No match"/>
            <Typography
                className={styles.title}
                size="large"
                color="red"
                tag="h1"
            >
                Page not found
            </Typography>
            <Typography
                color="secondary"
                size="medium"
                tag="span"
                className={styles.text}
            >
                Sorry, we can’t find what you’re looking for
            </Typography>
        </div>
    </div>
);
