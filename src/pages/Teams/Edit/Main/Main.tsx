import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { Form } from "@/modules/teams/components/Form";
import { Loader } from "@/common/components/Loader";
import { Caption } from "@/common/components/Caption";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/common/hooks";
import { SubmitHandler } from "react-hook-form";
import { IFields } from "@/modules/teams/interfaces/IActions";
import { useEdit } from "@/modules/teams/contexts/EditContext";
import { addToast } from "@/common/reducers/toastsReducer";
import { IData } from "@/modules/teams/interfaces/ITeams";
import { paths } from "@/routes/paths";
import { editTeam } from "@/api/teams";
import styles from "./Main.module.sass";

export const Main: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { team, loading, error } = useEdit();
    
    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const response = await editTeam(data);
            const responseData = response.data;

            dispatch(addToast({
                message: `${responseData.name} was successfully edit`,
                type: "success"
            }));

            navigate(paths.teams);
        } catch (e) {
            dispatch(addToast("The team was not edit"));
        }
    };
    
    if (loading) return <Loader/>;

    if (error) return <Typography>error</Typography>;

    const data = team as IData;
    
    return (
        <div className={styles["teams-edit"]}>
            <div className={styles.wrapper}>
                <Caption path={["Teams", data.name]}/>
                <Form defaultValue={data} onSubmit={onSubmit} onCancel={() => navigate(paths.teams)}/>
            </div>
        </div>
    );
};
