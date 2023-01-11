import React, { useState, createContext, FC, useEffect, useContext } from "react";
import { IResponse as IPlayers } from "@/modules/players/interfaces/IPlayers";
import { IData as ITeam } from "@/modules/teams/interfaces/ITeams";
import { getPlayers } from "@/api/players";
import { getTeam } from "@/api/teams";

interface IContext {
    id: number
    error: boolean
    loading: boolean
    team: ITeam | null
    players: IPlayers | null
}

interface Props {
    id: number
    children: React.ReactNode
}

const initState = {
    id: 0,
    team: null,
    error: false,
    loading: true,
    players: null
};

const DetailsContext = createContext<IContext>(initState);

export const useDetails = (): IContext => useContext(DetailsContext);

export const DetailsProvider: FC<Props> = (props) => {
    const { id, children } = props;
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState<ITeam | null>(null);
    const [players, setPlayers] = useState<IPlayers | null>(null);

    useEffect(() => {
        void onHandleGet(id);
    }, [id]);
    
    const onHandleGet = async (id: number): Promise<void> => {
        setError(false);
        setLoading(true);

        try {
            const team = await getTeam(id);
            const players = await getPlayers({ TeamIds: id });

            const teamData = team.data;
            const playersData = players.data;

            setTeam(teamData);
            setPlayers(playersData);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <DetailsContext.Provider value={{ id, team, error, loading, players }}>
            {children}
        </DetailsContext.Provider>
    );
};
