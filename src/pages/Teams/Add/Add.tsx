import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { Form } from "@/modules/teams/components/Form";
import { SubmitHandler } from "react-hook-form";
import { IFields } from "@/modules/teams/interfaces/IActions";
import { addTeam } from "@/api/teams";
import { addNotification } from "@/common/reducers/notificationReducer";
import { useAppDispatch } from "@/common/hooks";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";
import styles from "./Add.module.sass";

export const Add: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const response = await addTeam(data);
            const responseData = response.data;
            const name = responseData.name;

            dispatch(addNotification({
                message: `${name} was successfully added`,
                type: "success"
            }));

            navigate(paths.teams);
        } catch (e) {
            dispatch(addNotification("The team was not added"));
        }
    };

    return (
        <div className={styles["teams-add"]}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Typography className={styles.text}>Teams</Typography>
                    <Typography className={styles["forward-slash"]}>/</Typography>
                    <Typography className={styles.text}>Add new team</Typography>
                </div>
                <Form onSubmit={onSubmit} onCancel={() => navigate(paths.teams)}/>
            </div>
        </div>
    );
};
