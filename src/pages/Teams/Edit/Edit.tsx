import React, { FC } from "react";
import { EditProvider } from "@/modules/teams/contexts/EditContext";
import { useParams } from "react-router-dom";
import { Main } from "./Main";

export const Edit: FC = () => {
    const { id } = useParams();

    return (
        <EditProvider id={Number(id)}>
            <Main/>
        </EditProvider>
    );
};
