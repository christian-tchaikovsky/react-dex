import React, { useState, createContext, FC, useEffect, useContext } from "react";
import { IDetails } from "@/modules/players/interfaces/IPlayers";
import { getPlayer } from "@/api/players";

interface IContext {
    id: number
    error: boolean
    loading: boolean
    player: IDetails | null
}

interface Props {
    id: number
    children: React.ReactNode
}

const initState = {
    id: 0,
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
    const [player, setPlayer] = useState<IDetails | null>(null);

    useEffect(() => {
        void onHandleGet(id);
    }, [id]);

    const onHandleGet = async (id: number): Promise<void> => {
        setError(false);
        setLoading(true);

        try {
            const player = await getPlayer(id);
            const playerData = player.data;

            setPlayer(playerData);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DetailsContext.Provider value={{ id, error, loading, player }}>
            {children}
        </DetailsContext.Provider>
    );
};
