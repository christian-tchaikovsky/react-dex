import React, { FC } from "react";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { FormBody } from "@/common/components/Form/FormBody";
import { Form } from "@/modules/teams/components/Form";
import { SubmitHandler } from "react-hook-form";
import { IFields } from "@/modules/teams/interfaces/ITeams";
import { addTeam } from "@/api/teams";
import { addToast } from "@/common/reducers/toastsReducer";
import { useAppDispatch } from "@/common/hooks";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/paths";
import styles from "./Add.module.sass";

export const Add: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const breadcrumbs = [
        { name: "Teams", to: paths.teams },
        { name: "Add new team", to: "" }
    ];

    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const response = await addTeam(data);
            const responseData = response.data;
            const name = responseData.name;

            dispatch(addToast({
                message: `${name} was successfully added`,
                type: "success"
            }));

            navigate(paths.teams);
        } catch (e) {
            dispatch(addToast("The team was not added"));
        }
    };

    return (
        <div className={styles["teams-add"]}>
            <FormHeader>
                <Breadcrumbs path={breadcrumbs}/>
            </FormHeader>
            <FormBody className={styles["form-body"]}>
                <Form onSubmit={onSubmit} onCancel={() => navigate(paths.teams)}/>
            </FormBody>
        </div>
    );
};
