import React, { FC } from "react";
import { useDetails } from "@/modules/players/contexts/DetailsContext";
import { IDetails } from "@/modules/players/interfaces/IPlayers";
import { Typography } from "@/common/components/UI/Typography";
import { Card } from "@/modules/players/components/Card";
import { Loader } from "@/common/components/Loader";
import styles from "./Main.module.sass";

export const Main: FC = () => {
    const { player, loading, error } = useDetails();

    if (loading) return <Loader/>;

    if (error) return <Typography>error</Typography>;

    return (
        <div className={styles.details}>
            <Card
                player={player as IDetails}
            />
        </div>
    );
};
