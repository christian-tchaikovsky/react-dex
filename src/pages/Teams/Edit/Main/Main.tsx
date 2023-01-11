import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { Form } from "@/modules/teams/components/Form";
import { Loader } from "@/common/components/Loader";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/common/hooks";
import { SubmitHandler } from "react-hook-form";
import { IFields } from "@/modules/teams/interfaces/IAdd";
import { useEdit } from "@/modules/teams/contexts/EditContext";
import { addNotification } from "@/common/reducers/notificationReducer";
import { paths } from "@/routes/paths";
import styles from "./Main.module.sass";

export const Main: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { team, loading, error } = useEdit();
    
    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            console.log(data);
        } catch (e) {
            dispatch(addNotification("The team was not added"));
        }
    };
    
    if (loading) return <Loader/>;

    if (error) return <Typography>error</Typography>;

    return (
        <div className={styles["teams-edit"]}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Typography className={styles.text}>Teams</Typography>
                    <Typography className={styles["forward-slash"]}>/</Typography>
                    <Typography className={styles.text}>Edit team</Typography>
                </div>
                <Form defaultValue={team!} onSubmit={onSubmit} onCancel={() => navigate(paths.teams)}/>
            </div>
        </div>
    );
};
