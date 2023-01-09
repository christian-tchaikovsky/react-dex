import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import styles from "./Empty.module.sass";

interface Props {
    image: string
    title: string
    subtitle: string
}

export const Empty: FC<Props> = (props) => {
    const { image, title, subtitle } = props;
    
    return (
        <div className={styles.empty}>
            <img src={image} alt="Image" className={styles.image}/>
            <Typography
                tag="h2"
                size="large"
                className={styles.title}
            >
                {title}
            </Typography>
            <Typography
                color="secondary"
                size="medium"
                className={styles.subtitle}
            >
                {subtitle}
            </Typography>
        </div>
    );
};
