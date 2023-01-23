import React, { FC } from "react";
import { useDetails } from "@/modules/teams/contexts/DetailsContext";
import { Loader } from "@/common/components/Loader";
import { Typography } from "@/common/components/UI/Typography";
import { Table } from "@/modules/teams/components/Table";
import { Card } from "@/modules/teams/components/Card";
import styles from "./Main.module.sass";

export const Main: FC = () => {
    const { team, loading, error, players } = useDetails();

    if (loading) return <Loader />;
    
    if (error) return <Typography>error</Typography>;

    return (
        <div className={styles.details}>
            <Card className={styles.card} team={team!}/>
            <Table data={players!.data}/>
        </div>
    );
};
