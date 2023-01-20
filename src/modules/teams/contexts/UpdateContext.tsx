import React, { FC, createContext, useContext, useEffect, useState } from "react";
import { IData as ITeam } from "@/modules/teams/interfaces/ITeams";
import { getTeam } from "@/api/teams";

interface IContext {
    id: number
    error: boolean
    loading: boolean
    team: ITeam | null
}

interface Props {
    id: number
    children: React.ReactNode
}

const initState = {
    id: 0,
    team: null,
    error: false,
    loading: true
};

const UpdateContext = createContext<IContext>(initState);

export const useUpdateContext = (): IContext => {
    const context = useContext(UpdateContext);

    if (context) return context;

    throw new Error("Context must be used within Provider!");
};

export const UpdateProvider: FC<Props> = (props) => {
    const { id, children } = props;
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState<ITeam | null>(null);

    useEffect(() => {
        void onHandleGet(id);
    }, [id]);

    const onHandleGet = async (id: number): Promise<void> => {
        setError(false);
        setLoading(true);

        try {
            const team = await getTeam(id);
            const teamData = team.data;
            setTeam(teamData);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UpdateContext.Provider value={{ id, team, error, loading }}>
            {children}
        </UpdateContext.Provider>
    );
};
