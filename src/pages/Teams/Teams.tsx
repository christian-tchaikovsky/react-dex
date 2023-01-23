import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { fetchTeams } from "@/modules/teams/reducers/teamsReducer";
import { Typography } from "@/common/components/UI/Typography";
import { Condition } from "@/common/components/Condition";
import { Paginate } from "@/common/components/Paginate";
import { Button } from "@/common/components/UI/Button";
import { Search } from "@/common/components/UI/Search";
import { Select } from "@/common/components/UI/Select";
import { Loader } from "@/common/components/Loader";
import { Empty } from "@/common/components/Empty";
import { Card } from "@/common/components/Card";
import { useNavigate } from "react-router-dom";
import { sizes } from "@/common/constants/sizes";
import { paths } from "@/routes/paths";
import { ISizes } from "@/common/interfaces/ISizes";
import { SingleValue } from "react-select";
import Image from "@/common/assets/image/im-teams_empty.png";
import classNames from "classnames";
import styles from "./Teams.module.sass";

export const Teams: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const [name, setName] = useState("");
    const [size, setSize] = useState(sizes[0].value);
    const [search, setSearch] = useState("");
    const [option, setOption] = useState<SingleValue<ISizes>>(sizes[0]);
    const { teams, loading, error } = useAppSelector(state => state.teams);
    const pagination = !!teams?.count && !!teams?.size;
    const teamsLength = teams?.data.length;

    useEffect(() => {
        dispatch(fetchTeams({
            Name: name,
            Page: page,
            PageSize: size
        }));
    }, [name, page, size]);

    useEffect(() => {
        if (!option) return;

        setSize(option.value);
        setPage(1);
    }, [option]);

    const onHandleSearch = (): void => {
        setPage(1);
        setName(search);
    };

    if (error) return <Typography>error</Typography>;

    return (
        <div className={styles.teams}>
            <div className={styles.top}>
                <Search
                    value={search}
                    onSearch={onHandleSearch}
                    onChange={e => setSearch(e.target.value)}
                />
                <Button
                    icon="add"
                    variant="primary"
                    className={styles.button}
                    onClick={() => navigate(paths.teams_add)}
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
                        : teams?.data.map(team => (
                            <Card
                                key={team.id}
                                title={team.name}
                                image={team.imageUrl}
                                to={`${paths.teams}/${team.id}`}
                                subtitle={`Year of foundation: ${team.foundationYear}`}
                            />
                        ))
                    }
                </div>
                <div className={styles.bottom}>
                    {pagination && (
                        <Paginate
                            value={page}
                            onChange={e => setPage(e.selected)}
                            count={Math.ceil(teams.count / teams.size)}
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
