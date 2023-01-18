import React from "react";
import { Main } from "./Main";
import { useParams } from "react-router-dom";
import { DetailsProvider } from "@/modules/players/contexts/DetailsContext";

export const Details = () => {
    const { id } = useParams();

    return (
        <DetailsProvider id={Number(id)}>
            <Main/>
        </DetailsProvider>
    );
};
