import React from "react";
import { useDetails } from "@/modules/players/contexts/DetailsContext";
import { Typography } from "@/common/components/UI/Typography";
import { Card } from "@/modules/players/components/Card";
import { Loader } from "@/common/components/Loader";

export const Main = () => {
    const { team, player, loading, error } = useDetails();
    
    if (loading) return <Loader/>;
    
    if (error) return <Typography>error</Typography>;
    
    return (
        <div>
            <Card
                player={player!}
                team={team!.name}
            />
        </div>
    );
};
