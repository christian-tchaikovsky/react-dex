import React, { FC } from "react";
import { UpdateProvider } from "@/modules/teams/contexts/UpdateContext";
import { useParams } from "react-router-dom";
import { Main } from "./Main";

export const Update: FC = () => {
    const { id } = useParams();

    return (
        <UpdateProvider id={Number(id)}>
            <Main/>
        </UpdateProvider>
    );
};
