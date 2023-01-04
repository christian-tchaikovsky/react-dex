import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import styles from "./Card.module.sass";

interface Props {
    image: string
    title: string
    subtitle: string
    number?: number
}

export const Card: FC<Props> = (props) => {
    const { title, subtitle, image, number } = props;
    
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                {image
                    ? <img src={`http://dev.trainee.dex-it.ru${image}`} alt="image"/>
                    : "No image here"
                }
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <Typography
                        tag="h4"
                        className={styles.main}
                    >
                        {title}
                    </Typography>
                    {number && (
                        <Typography
                            className={styles.number}
                            color="red"
                        >
                            {`#${number}`}
                        </Typography>
                    )}
                </div>
                <Typography className={styles.subtitle}>{subtitle}</Typography>
            </div>
        </div>
    );
};
