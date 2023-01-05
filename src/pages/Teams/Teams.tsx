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
import { MultiValue } from "react-select";
import styles from "./Teams.module.sass";

interface OptionType {
    value: number | string
    label: string
}

const options: OptionType[] = [
    { value: 6, label: "6" },
    { value: 12, label: "12" },
    { value: 24, label: "24" }
];

export const Teams: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [size] = useState(6);
    const [option, setOption] = useState<MultiValue<OptionType>>([]);
    const { teams, loading } = useAppSelector(state => state.teams);

    useEffect(() => {
        dispatch(fetchTeams({
            Page: page,
            PageSize: size
        }));
    }, [page, size]);

    if (loading) return <Loader/>;

    return (
        <div className={styles.teams}>
            <div className={styles.top}>
                <Search 
                    onChange={e => setSearch(e.target.value)} 
                    value={search}
                />
                <Button 
                    onClick={() => navigate("/teams/add")} 
                    variant="primary" 
                    icon="add"
                >
                    Add
                </Button>
            </div>
            <div className={styles.main}>
                {teams?.data.map(data => (
                    <Card
                        key={data.id}
                        image={data.imageUrl}
                        title={data.name}
                        subtitle={`Year of foundation: ${data.foundationYear}`}
                    />
                ))}
            </div>
            <div className={styles.bottom}>
                <Paginate
                    count={Math.ceil(teams!.count / teams!.size)}
                    onChange={e => setPage(e.selected)}
                />
                <Select
                    options={options}
                    isMulti={true}
                    value={option}
                    onChange={e => setOption(e)}
                />
            </div>
        </div>
    );
};
