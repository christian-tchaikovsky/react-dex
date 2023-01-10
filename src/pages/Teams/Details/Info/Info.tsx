import React, { FC } from "react";
import { useDetails } from "@/modules/teams/contexts/DetailsContext";
import { Loader } from "@/common/components/Loader";
import { Typography } from "@/common/components/UI/Typography";
import { Table } from "@/modules/teams/components/Table";

export const Info: FC = () => {
    const { team, loading, error, players } = useDetails();

    if (loading) return <Loader />;
    
    if (error) return <Typography>Error</Typography>;

    if (!team) return null;

    return (
        <div>
            <Typography>{team.name}</Typography>
            <Table data={players!.data}/>
        </div>
    );
};
