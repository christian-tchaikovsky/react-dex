import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { DetailsProvider } from "@/modules/teams/contexts/DetailsContext";
import { Main } from "@/pages/Teams/Details/Main";

export const Details: FC = () => {
    const { id } = useParams();

    return (
        <DetailsProvider id={Number(id)}>
            <Main/>
        </DetailsProvider>
    );
};
