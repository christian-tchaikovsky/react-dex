import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { fetchTeams } from "@/modules/teams/reducers/teamsReducer";
import { Card } from "@/common/components/Card";
import { Loader } from "@/common/components/Loader";
import { Button } from "@/common/components/UI/Button";
import { Search } from "@/common/components/UI/Search";
import { Paginate } from "@/common/components/Paginate";
import { useNavigate } from "react-router-dom";
import { Select } from "@/common/components/UI/Select/Select";
import { sizes } from "@/common/constants/sizeOptions";
import { ISizes } from "@/common/interfaces/ISizes";
import { SingleValue } from "react-select";
import styles from "./Teams.module.sass";

export const Teams: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [option, setOption] = useState<SingleValue<ISizes>>(sizes[0]);
    const { teams, loading } = useAppSelector(state => state.teams);

    useEffect(() => {
        dispatch(fetchTeams({
            Page: page,
            PageSize: 6
        }));
    }, [page]);

    if (loading) return <Loader/>;

    return (
        <div className={styles.teams}>
            <div className={styles.top}>
                <Search
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <Button
                    icon="add"
                    variant="primary"
                    onClick={() => navigate("/teams/add")}
                >
                    Add
                </Button>
            </div>
            <div className={styles.main}>
                {teams?.data.map(data => (
                    <Card
                        key={data.id}
                        title={data.name}
                        image={data.imageUrl}
                        subtitle={`Year of foundation: ${data.foundationYear}`}
                    />
                ))}
            </div>
            <div className={styles.bottom}>
                <Paginate
                    onChange={e => setPage(e.selected)}
                    count={Math.ceil(teams!.count / teams!.size)}
                />
                <Select
                    value={option}
                    options={sizes}
                    isMulti={false}
                    onChange={e => setOption(e)}
                />
            </div>
        </div>
    );
};
