import React, { FC } from "react";
import { FormActions } from "@/common/components/Form/FormActions";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { FormBody } from "@/common/components/Form/FormBody";
import { Icon } from "@/common/components/Icon";
import { IDetails } from "@/modules/players/interfaces/IPlayers";
import { Typography } from "@/common/components/UI/Typography";
import { useDetails } from "@/modules/players/contexts/DetailsContext";
import { useAppDispatch } from "@/common/hooks";
import { removePlayer } from "@/api/players";
import { addToast } from "@/common/reducers/toastsReducer";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";
import classNames from "classnames";
import styles from "./Card.module.sass";
import moment from "moment";

interface Props {
    player: IDetails
    className?: string
}

const baseUrl = process.env.REACT_APP_BASE_URL;

export const Card: FC<Props> = (props) => {
    const { player, className } = props;
    const { id } = useDetails();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { teamName, number, name, position, height, weight, birthday, avatarUrl } = player;
    const image = `${baseUrl}${avatarUrl}`;
    const age = calculateAge();

    const breadcrumbs = [
        { name: "Players", to: paths.players },
        { name, to: "" }
    ];

    function calculateAge(): number {
        const format = moment(birthday, "YYYY-MM-DD[T]HH:mm:ss");
        return moment().diff(format, "years");
    }

    async function onHandleRemove(): Promise<void> {
        try {
            const response = await removePlayer(id);
            const data = response.data;

            dispatch(addToast({
                message: `${data.name} was successfully deleted`,
                type: "success"
            }));

            navigate(paths.players);
        } catch (e) {
            dispatch(addToast("The team was not deleted"));
        }
    }

    function onHandleNavigate(): void {
        navigate(`${paths.players}/edit/${id}`);
    }

    return (
        <div className={classNames(styles.card, className)}>
            <FormHeader className={styles["form-header"]}>
                <Breadcrumbs path={breadcrumbs}/>
                <FormActions>
                    <Icon
                        title="Edit"
                        name="create"
                        onClick={onHandleNavigate}
                        className={styles.create}
                    />
                    <Icon
                        name="delete"
                        title="Remove"
                        onClick={onHandleRemove}
                        className={styles.delete}
                    />
                </FormActions>
            </FormHeader>
            <FormBody className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.flex}>
                        <div className={styles.image}>
                            <img src={image} alt="image"/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <Typography size="large" tag="h1" className={styles.name}>{name}</Typography>
                                <Typography className={styles.number}>{`#${number}`}</Typography>
                            </div>
                            <div className={styles.grid}>
                                <div>
                                    <Typography tag="h4" className={styles.title}>Position</Typography>
                                    <Typography className={styles.text}>{position}</Typography>
                                </div>
                                <div>
                                    <Typography tag="h4" className={styles.title}>Team</Typography>
                                    <Typography className={styles.text}>{teamName}</Typography>
                                </div>
                                <div>
                                    <Typography tag="h4" className={styles.title}>Height</Typography>
                                    <Typography className={styles.text}>{height}</Typography>
                                </div>

                                <div>
                                    <Typography tag="h4" className={styles.title}>Weight</Typography>
                                    <Typography className={styles.text}>{weight}</Typography>
                                </div>
                                <div>
                                    <Typography tag="h4" className={styles.title}>Age</Typography>
                                    <Typography className={styles.text}>{age}</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FormBody>
        </div>
    );
};
