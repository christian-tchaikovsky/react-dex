import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./Card.module.sass";

interface Props {
    to: string
    image: string
    title: string
    subtitle: string
    number?: number
    variant?: "player" | "team" // TODO Change props to "position"
}

const baseUrl = process.env.REACT_APP_BASE_URL;

export const Card: FC<Props> = (props) => {
    const { title, subtitle, image, number, variant = "team", to } = props;
    const navigate = useNavigate();
    const src = `${baseUrl}${image}`;

    // TODO Change to Link
    const onHandleNavigate = (): void => {
        navigate(to);
    };
    
    return (
        <div onClick={onHandleNavigate} className={styles.card}>
            <div className={classNames(
                styles["image-container"], {
                    [styles.team]: variant === "team",
                    [styles.player]: variant === "player"
                }
            )}>
                {image
                    ? <img className={styles.image} src={src} alt="image"/>
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
