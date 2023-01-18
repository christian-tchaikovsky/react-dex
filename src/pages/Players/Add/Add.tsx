import React, { FC } from "react";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { FormBody } from "@/common/components/Form/FormBody";
import { Form } from "@/modules/players/components/Form";
import { IFields } from "@/modules/players/interfaces/IPlayers";
import { addToast } from "@/common/reducers/toastsReducer";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/common/hooks";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "@/api/players";
import { paths } from "@/routes/paths";
import styles from "./Add.module.sass";

export const Add: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const breadcrumbs = [
        { name: "Players", to: paths.players },
        { name: "Add new player", to: "" }
    ];

    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const team = data.team.value;
            const position = data.position.value;

            const obj = Object.assign(data, {
                team,
                position
            });

            const response = await addPlayer(obj);
            const responseData = response.data;
            const name = responseData.name;

            dispatch(addToast({
                message: `${name} was successfully added`,
                type: "success"
            }));

            navigate(paths.players);
        } catch (e) {
            dispatch(addToast("The team was not added"));
        }
    };

    return (
        <div>
            <FormHeader>
                <Breadcrumbs path={breadcrumbs}/>
            </FormHeader>
            <FormBody className={styles["form-body"]}>
                <Form
                    onSubmit={onSubmit} 
                    onCancel={() => navigate(paths.players)}
                />
            </FormBody>
        </div>
    );
};
