import React, { FC } from "react";
import { useDetails } from "@/modules/teams/contexts/DetailsContext";
import { Loader } from "@/common/components/Loader";
import { Typography } from "@/common/components/UI/Typography";

export const Info: FC = () => {
    const { team, loading, error, players } = useDetails();

    if (loading) return <Loader />;
    
    if (error) return <Typography>Error</Typography>;

    console.log(team, players);

    return (
        <div />
    );
};
