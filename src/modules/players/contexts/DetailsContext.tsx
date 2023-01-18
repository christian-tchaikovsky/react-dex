import React, { useState, createContext, FC, useEffect, useContext } from "react";
import { IData as IPlayer } from "@/modules/players/interfaces/IPlayers";
import { IData as ITeam } from "@/modules/teams/interfaces/ITeams";
import { getPlayer } from "@/api/players";
import { getTeam } from "@/api/teams";

interface IContext {
    id: number
    error: boolean
    loading: boolean
    team: ITeam | null
    player: IPlayer | null
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
    player: null
};

const DetailsContext = createContext<IContext>(initState);

export const useDetails = (): IContext => useContext(DetailsContext);

export const DetailsProvider: FC<Props> = (props) => {
    const { id, children } = props;
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState<ITeam | null>(null);
    const [player, setPlayer] = useState<IPlayer | null>(null);

    useEffect(() => {
        void onHandleGet(id);
    }, [id]);

    const onHandleGet = async (id: number): Promise<void> => {
        setError(false);
        setLoading(true);

        try {
            const player = await getPlayer(id);
            const playerData = player.data;

            const team = await getTeam(playerData.team);
            const teamData = team.data;

            setTeam(teamData);
            setPlayer(playerData);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DetailsContext.Provider value={{ id, team, error, loading, player }}>
            {children}
        </DetailsContext.Provider>
    );
};
