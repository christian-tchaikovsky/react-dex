import React, { FC } from "react";
import { FormActions } from "@/common/components/Form/FormActions";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { FormBody } from "@/common/components/Form/FormBody";
import { Icon } from "@/common/components/Icon";
import { IData } from "@/modules/teams/interfaces/ITeams";
import { Typography } from "@/common/components/UI/Typography";
import { useDetails } from "@/modules/teams/contexts/DetailsContext";
import { removeTeam } from "@/api/teams";
import { useAppDispatch } from "@/common/hooks";
import { addToast } from "@/common/reducers/toastsReducer";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";
import classNames from "classnames";
import styles from "./Card.module.sass";

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

    const breadcrumbs = [
        { name: "Teams", to: paths.teams },
        { name, to: "" }
    ];

    const onHandleRemove = async (): Promise<void> => {
        try {
            const response = await removeTeam(id);
            const data = response.data;

            dispatch(addToast({
                message: `${data.name} was successfully deleted`,
                type: "success"
            }));

            navigate(paths.teams);
        } catch (e) {
            dispatch(addToast("The team was not deleted"));
        }
    };
    
    const onHandleNavigate = (): void => {
        navigate(`${paths.teams}/edit/${id}`);
    };

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
                            <Typography size="large" tag="h1" className={styles.name}>{name}</Typography>
                            <div className={styles.grid}>
                                <div>
                                    <Typography tag="h4" className={styles.title}>Year of foundation</Typography>
                                    <Typography className={styles.text}>{foundationYear}</Typography>
                                </div>
                                <div>
                                    <Typography tag="h4" className={styles.title}>Division</Typography>
                                    <Typography className={styles.text}>{division}</Typography>
                                </div>
                                <div>
                                    <Typography tag="h4" className={styles.title}>Conference</Typography>
                                    <Typography className={styles.text}>{conference}</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FormBody>
        </div>
    );
};
