import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import { IData } from "@/modules/players/interfaces/IPlayers";
import { useMatchMedia } from "@/common/hooks/useMatchMedia";
import { Condition } from "@/common/components/Condition";
import { desktop } from "@/common/constants/queries";
import moment from "moment/moment";
import styles from "../Table.module.sass";

interface Props {
    data: IData[]
}

const baseUrl = process.env.REACT_APP_BASE_URL;

const queries = [
    desktop
];

export const Body: FC<Props> = (props) => {
    const [desktop] = useMatchMedia(queries);

    return (
        <tbody>
            {props.data.map(player => (
                <tr key={player.id}>
                    <td>{player.number}</td>
                    <td>
                        <div className={styles.player}>
                            <div className={styles.avatar}>
                                <img src={`${baseUrl}${player.avatarUrl}`} alt="avatar"/>
                            </div>
                            <div className={styles.info}>
                                <Typography color="secondary" className={styles.name}>{player.name}</Typography>
                                <Typography className={styles.position}>{player.position}</Typography>
                            </div>
                        </div>
                    </td>
                    <Condition condition={desktop} otherwise={null}>
                        <td>{player.height} cm</td>
                        <td>{player.weight} kg</td>
                        <td>{moment().diff(player.birthday, "years")}</td>
                    </Condition>
                </tr>
            ))}
        </tbody>
    );
};
