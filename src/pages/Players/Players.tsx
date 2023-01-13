import React, { FC, useEffect, useState } from "react";
import { Select as SelectTeam, Option } from "@/modules/players/components/Select";
import { Typography } from "@/common/components/UI/Typography";
import { Select } from "@/common/components/UI/Select";
import { Paginate } from "@/common/components/Paginate";
import { Search } from "@/common/components/UI/Search";
import { Button } from "@/common/components/UI/Button";
import { Loader } from "@/common/components/Loader";
import { Empty } from "@/common/components/Empty";
import { Card } from "@/common/components/Card";
import { fetchPlayers } from "@/modules/players/reducers/playersReducer";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { useDidUpdateEffect } from "@/common/hooks/useDidUpdateEffect";
import { useNavigate } from "react-router-dom";
import { sizes } from "@/common/constants/sizes";
import { paths } from "@/routes/paths";
import { ISizes } from "@/common/interfaces/ISizes";
import { MultiValue, SingleValue } from "react-select";
import Image from "@/common/assets/image/im-players_empty.png";
import classNames from "classnames";
import styles from "./Players.module.sass";

export const Players: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const [name, setName] = useState("");
    const [size, setSize] = useState(sizes[0].value);
    const [search, setSearch] = useState("");
    const [teamsIds, setTeamsIds] = useState<number[]>([]);
    const [option, setOption] = useState<SingleValue<ISizes>>(sizes[0]);
    const [teams, setTeams] = useState<MultiValue<Option>>([]);
    const { players, loading, error } = useAppSelector(state => state.players);
    const pagination = !!players?.count && !!players?.size;
    const teamsLength = players?.data.length;
    
    useEffect(() => {
        dispatch(fetchPlayers({
            Name: name,
            Page: page,
            PageSize: size,
            TeamIds: teamsIds
        }));
    }, [name, page, size, teamsIds]);

    useEffect(() => {
        if (!option) return;

        setSize(option.value);
        setPage(1);
    }, [option]);

    useDidUpdateEffect(() => {
        setTeamsIds(teams.map(team => team.value));
    }, [teams]);

    const onHandleSearch = (): void => {
        setPage(1);
        setName(search);
    };

    if (loading) return <Loader/>;

    if (error) return <Typography>error</Typography>;
    
    return (
        <div className={styles.players}>
            <div className={styles.top}>
                <div className={styles.actions}>
                    <Search
                        value={search}
                        className={styles.search}
                        onSearch={onHandleSearch}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <SelectTeam
                        value={teams}
                        onChange={newValue => setTeams(newValue)}
                    />
                </div>
                <Button
                    icon="add"
                    variant="primary"
                    onClick={() => navigate(paths.teams_add)}
                >
                    Add
                </Button>
            </div>
            <div className={classNames(
                styles.main, {
                    [styles.grid]: teamsLength,
                    [styles.flex]: !teamsLength
                }
            )}
            >
                {!teamsLength
                    ? <Empty image={Image} title="Empty here" subtitle="Add new teams to continue"/>
                    : players?.data.map(data => (
                        <Card
                            id={data.id}
                            key={data.id}
                            variant="player"
                            title={data.name}
                            number={data.number}
                            image={data.avatarUrl}
                            subtitle={data.position}
                            to={paths.players_details}
                        />
                    ))
                }
            </div>
            <div className={styles.bottom}>
                {pagination && (
                    <Paginate
                        value={page}
                        onChange={e => setPage(e.selected)}
                        count={Math.ceil(players.count / players.size)}
                    />
                )}
                <Select
                    className={styles.select}
                    value={option}
                    options={sizes}
                    isMulti={false}
                    onChange={e => setOption(e)}
                />
            </div>
        </div>
    );
};
