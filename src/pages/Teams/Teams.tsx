import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { fetchTeams } from "@/modules/teams/reducers/teamsReducer";
import { Card } from "@/common/components/Card";
import { Loader } from "@/common/components/Loader";
import styles from "./Teams.module.sass";

export const Teams: FC = () => {
    const dispatch = useAppDispatch();
    const { teams, loading } = useAppSelector(state => state.teams);
    const [page] = useState(1);
    const [size] = useState(6);

    useEffect(() => {
        dispatch(fetchTeams({
            Page: page,
            PageSize: size
        }));
    }, [page, size]);

    if (loading) return <Loader/>;

    return (
        <div>
            <div className={styles.teams}>
                {teams?.data.map(data => (
                    <Card
                        key={data.id}
                        number={10}
                        image={data.imageUrl}
                        title={data.name}
                        subtitle={`Year of foundation: ${data.foundationYear}`}
                    />
                ))}
            </div>
        </div>
    );
};
