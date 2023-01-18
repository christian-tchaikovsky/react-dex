import React from "react";
import { EditProvider } from "@/modules/players/contexts/EditContext";
import { useParams } from "react-router-dom";
import { Main } from "./Main";

export const Edit = () => {
    const { id } = useParams();
    
    return (
        <EditProvider id={Number(id)}>
            <Main/>
        </EditProvider>
    );
};
