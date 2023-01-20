import React, { FC } from "react";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Typography } from "@/common/components/UI/Typography";
import { FormBody } from "@/common/components/Form/FormBody";
import { Form } from "@/modules/teams/components/Form";
import { Loader } from "@/common/components/Loader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/common/hooks";
import { SubmitHandler } from "react-hook-form";
import { IFields } from "@/modules/teams/interfaces/ITeams";
import { useUpdateContext } from "@/modules/teams/contexts/UpdateContext";
import { addToast } from "@/common/reducers/toastsReducer";
import { paths } from "@/routes/paths";
import { editTeam } from "@/api/teams";
import styles from "./Main.module.sass";

export const Main: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { team, loading, error } = useUpdateContext();
    
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

    if (!team) return null;

    const breadcrumbs = [
        { name: "Teams", to: paths.teams },
        { name: team.name, to: "" }
    ];

    return (
        <div className={styles["teams-edit"]}>
            <FormHeader>
                <Breadcrumbs path={breadcrumbs}/>
            </FormHeader>
            <FormBody className={styles["form-body"]}>
                <Form
                    onSubmit={onSubmit}
                    defaultValue={team}
                    onCancel={() => navigate(paths.teams)}
                />
            </FormBody>
        </div>
    );
};
