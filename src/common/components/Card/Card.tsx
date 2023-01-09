import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/constants/paths";
import styles from "./Card.module.sass";

interface Props {
    id: number
    image: string
    title: string
    subtitle: string
    number?: number
}

export const Card: FC<Props> = (props) => {
    const { id, title, subtitle, image, number } = props;
    const navigate = useNavigate();
    
    const onHandleNavigate = (): void => {
        const path = paths.teams_details.replace(":id", String(id));
        navigate(path);
    };
    
    return (
        <div onClick={onHandleNavigate} className={styles.card}>
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
