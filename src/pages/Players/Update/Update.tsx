import React from "react";
import { UpdateProvider } from "@/modules/players/contexts/UpdateContext";
import { useParams } from "react-router-dom";
import { Main } from "./Main";

export const Update = () => {
    const { id } = useParams();
    
    return (
        <UpdateProvider id={Number(id)}>
            <Main/>
        </UpdateProvider>
    );
};
