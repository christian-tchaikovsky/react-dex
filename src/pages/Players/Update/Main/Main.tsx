import React, { FC } from "react";
import { useUpdateContext } from "@/modules/players/contexts/UpdateContext";
import { Typography } from "@/common/components/UI/Typography";
import { Loader } from "@/common/components/Loader";
import { Form } from "@/modules/players/components/Form";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { FormBody } from "@/common/components/Form/FormBody";
import { paths } from "@/routes/paths";
import { SubmitHandler } from "react-hook-form";
import { IFields } from "@/modules/players/interfaces/IPlayers";
import { addToast } from "@/common/reducers/toastsReducer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/common/hooks";
import { editPlayer } from "@/api/players";

export const Main: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { player, loading, error } = useUpdateContext();

    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const team = data.team.value;
            const position = data.position.value;
            const cloned = JSON.parse(JSON.stringify(data));

            const obj = Object.assign(cloned, {
                team,
                position
            });

            const response = await editPlayer(obj);
            const responseData = response.data;
            const name = responseData.name;

            dispatch(addToast({
                message: `${name} was successfully edit`,
                type: "success"
            }));

            navigate(paths.players);
        } catch (e) {
            dispatch(addToast("The player was not edit"));
        }
    };

    if (loading) return <Loader/>;

    if (error) return <Typography>error</Typography>;

    if (!player) return null;

    const breadcrumbs = [
        { name: "Players", to: paths.players },
        { name: player.name, to: "" }
    ];
    
    return (
        <div>
            <FormHeader>
                <Breadcrumbs path={breadcrumbs}/>
            </FormHeader>
            <FormBody>
                <Form
                    defaultValue={player}
                    onSubmit={onSubmit}
                    onCancel={() => navigate(paths.players)}
                />
            </FormBody>
        </div>
    );
};
