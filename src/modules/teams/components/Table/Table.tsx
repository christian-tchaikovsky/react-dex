import React, { FC } from "react";
import { IData } from "@/modules/players/interfaces/IPlayers";
import { Head } from "@/modules/teams/components/Table/Head";
import { Body } from "@/modules/teams/components/Table/Body";
import styles from "./Table.module.sass";

interface Props {
    data: IData[]
}

export const Table: FC<Props> = (props) => {
    const { data } = props;

    return (
        <table className={styles.table}>
            <caption>Roster</caption>
            <Head/>
            <Body data={data} />
        </table>
    );
};
