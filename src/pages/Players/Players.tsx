import React, { FC, useEffect, useState } from "react";
import { Paginate as SelectPaginate } from "@/common/components/UI/Select/Paginate";
import { Typography } from "@/common/components/UI/Typography";
import { Condition } from "@/common/components/Condition";
import { Paginate } from "@/common/components/Paginate";
import { Select } from "@/common/components/UI/Select";
import { Search } from "@/common/components/UI/Search";
import { Button } from "@/common/components/UI/Button";
import { Loader } from "@/common/components/Loader";
import { Empty } from "@/common/components/Empty";
import { Card } from "@/common/components/Card";
import { fetchPlayers } from "@/modules/players/reducers/playersReducer";
import { useDidUpdateEffect } from "@/common/hooks/useDidUpdateEffect";
import { useAppDispatch, useAppSelector, useDebounce } from "@/common/hooks";
import { useNavigate } from "react-router-dom";
import { sizes } from "@/common/constants/sizes";
import { paths } from "@/routes/paths";
import { ISizes } from "@/common/interfaces/ISizes";
import { MultiValue, SingleValue } from "react-select";
import { IOption, teamOptions } from "@/modules/players/components/Select/Team";
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
    const [teams, setTeams] = useState<MultiValue<IOption>>([]);
    const debounced = useDebounce(teams, 1000);
    const { players, loading, error } = useAppSelector(state => state.players);
    const pagination = !!players?.count && !!players?.size;
    const teamsLength = players?.data.length;

    useEffect(() => {
        const dispatchPlayers = dispatch(fetchPlayers({
            Name: name,
            Page: page,
            PageSize: size,
            TeamIds: teamsIds
        }));

        return () => {
            dispatchPlayers.abort();
        };
    }, [name, page, size, teamsIds]);

    useEffect(() => {
        if (!option) return;

        setSize(option.value);
        setPage(1);
    }, [option]);

    useDidUpdateEffect(() => {
        setTeamsIds(teams.map(team => team.value));
    }, [debounced]);

    const onHandleSearch = (): void => {
        setPage(1);
        setName(search);
    };

    if (error) return <Typography>error</Typography>;
    
    return (
        <div className={styles.players}>
            <div className={styles.top}>
                <div className={styles.inputs}>
                    <Search
                        value={search}
                        className={styles.search}
                        onSearch={onHandleSearch}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <SelectPaginate
                        value={teams}
                        isMulti={true}
                        isClearable={false}
                        loadOptions={teamOptions}
                        closeMenuOnSelect={false}
                        className={styles["select-team"]}
                        onChange={newValue => setTeams(newValue)}
                    />
                </div>
                <Button
                    icon="add"
                    variant="primary"
                    onClick={() => navigate(paths.players_add)}
                >
                    Add
                </Button>
            </div>
            <Condition condition={!loading} otherwise={<Loader className={styles.loader} />}>
                <div className={classNames(
                    styles.main, {
                        [styles.grid]: teamsLength,
                        [styles.flex]: !teamsLength
                    }
                )}
                >
                    {!teamsLength
                        ? <Empty image={Image} title="Empty here" subtitle="Add new teams to continue"/>
                        : players?.data.map(player => (
                            <Card
                                key={player.id}
                                title={player.name}
                                imagePosition="bottom"
                                number={player.number}
                                image={player.avatarUrl}
                                subtitle={player.position}
                                to={`${paths.players}/${player.id}`}
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
            </Condition>
        </div>
    );
};
