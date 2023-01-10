import React, { FC } from "react";
import { Icon } from "@/common/components/Icon";
import { IData } from "@/modules/teams/interfaces/ITeams";
import { Typography } from "@/common/components/UI/Typography";
import { useDetails } from "@/modules/teams/contexts/DetailsContext";
import { removeTeam } from "@/api/teams";
import classNames from "classnames";
import styles from "./Card.module.sass";
import { useAppDispatch } from "@/common/hooks";
import { addNotification } from "@/common/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/constants/paths";

interface Props {
    team: IData
    className?: string
}

const baseUrl = process.env.REACT_APP_BASE_URL;

export const Card: FC<Props> = (props) => {
    const { team, className } = props;
    const { id } = useDetails();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { imageUrl, name, foundationYear, division, conference } = team;
    const image = `${baseUrl}${imageUrl}`;

    const onHandleRemove = async (): Promise<void> => {
        try {
            const response = await removeTeam(id);
            const data = response.data;

            dispatch(addNotification({
                message: `${data.name} was successfully deleted`,
                type: "success"
            }));

            navigate(paths.teams);
        } catch (e) {
            dispatch(addNotification("The team was not deleted"));
        }
    };

    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <Typography className={styles.text}>Teams</Typography>
                    <Typography className={styles["forward-slash"]}>/</Typography>
                    <Typography className={styles.text}>{name}</Typography>
                </div>
                <div className={styles.actions}>
                    <Icon className={styles.create} name="create"/>
                    <Icon onClick={onHandleRemove} className={styles.delete} name="delete"/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.flex}>
                        <div className={styles.image}>
                            <img src={image} alt="image"/>
                        </div>
                        <div className={styles.info}>
                            <Typography size="large" tag="h1" className={styles.name}>{name}</Typography>
                            <div className={styles.grid}>
                                <div>
                                    <Typography tag="h4" size="medium" className={styles.title}>
                                        Year of foundation
                                    </Typography>
                                    <Typography className={classNames(styles.year, styles.text)}>
                                        {foundationYear}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography tag="h4" size="medium" className={styles.title}>
                                        Division
                                    </Typography>
                                    <Typography className={classNames(styles.division, styles.text)}>
                                        {division}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography tag="h4" size="medium" className={styles.title}>
                                        Conference
                                    </Typography>
                                    <Typography className={classNames(styles.conference, styles.text)}>
                                        {conference}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
