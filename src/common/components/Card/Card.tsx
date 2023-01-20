import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Card.module.sass";

interface Props {
    to: string
    image: string
    title: string
    subtitle: string
    number?: number
    imagePosition?: "center" | "bottom" | "top"
}

const baseUrl = process.env.REACT_APP_BASE_URL;

export const Card: FC<Props> = (props) => {
    const { title, subtitle, image, number, imagePosition = "center", to } = props;
    const src = `${baseUrl}${image}`;
    
    return (
        <Link className={styles["card-link"]} to={to}>
            <div className={styles.card}>
                <div className={classNames(
                    styles["image-container"], {
                        [styles.top]: imagePosition === "top",
                        [styles.center]: imagePosition === "center",
                        [styles.bottom]: imagePosition === "bottom"
                    }
                )}>
                    <img className={styles.image} src={src} alt="image"/>
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
        </Link>
    );
};
