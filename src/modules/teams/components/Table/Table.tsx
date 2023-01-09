import React, { FC } from "react";
import styles from "./Table.module.sass";

interface Props {
    data: string
}

export const Table: FC<Props> = (props) => {
    const { data } = props;

    console.log(data);
    
    return (
        <table className={styles.table}>
            <caption>Roster</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10</td>
                    <td>
                        <div>
                            <p>Bol Bol</p>
                            <p>Centerforward</p>
                        </div>
                    </td>
                    <td>218 cm</td>
                    <td>100 kg</td>
                    <td>21</td>
                </tr>
            </tbody>
        </table>
    );
};
