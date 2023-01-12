import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { DetailsProvider } from "@/modules/teams/contexts/DetailsContext";
import { Info } from "@/pages/Teams/Details/Info";

export const Details: FC = () => {
    const { id } = useParams();

    return (
        <DetailsProvider id={Number(id)}>
            <Info/>
        </DetailsProvider>
    );
};
