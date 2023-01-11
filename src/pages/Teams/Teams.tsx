import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { fetchTeams } from "@/modules/teams/reducers/teamsReducer";
import { Typography } from "@/common/components/UI/Typography";
import { Card } from "@/common/components/Card";
import { Loader } from "@/common/components/Loader";
import { Button } from "@/common/components/UI/Button";
import { Search } from "@/common/components/UI/Search";
import { Paginate } from "@/common/components/Paginate";
import { useNavigate } from "react-router-dom";
import { Select } from "@/common/components/UI/Select/Select";
import { Empty } from "@/common/components/Empty";
import { sizes } from "@/common/constants/sizes";
import { paths } from "@/routes/constants/paths";
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
    const [search, setSearch] = useState("");
    const [option, setOption] = useState<SingleValue<ISizes>>(sizes[0]);
    const { teams, loading, error } = useAppSelector(state => state.teams);
    const pagination = !!teams?.count && !!teams?.size;
    const teamsLength = teams?.data.length;

    useEffect(() => {
        dispatch(fetchTeams({
            Name: name,
            Page: page,
            PageSize: option?.value
        }));
    }, [name, page, option]);

    const onHandleSearch = (): void => {
        setPage(1);
        setName(search);
    };

    if (loading) return <Loader/>;

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
                    : teams?.data.map(data => (
                        <Card
                            id={data.id}
                            key={data.id}
                            title={data.name}
                            image={data.imageUrl}
                            subtitle={`Year of foundation: ${data.foundationYear}`}
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
        </div>
    );
};
