import React, { useState, createContext, FC, useEffect, useContext } from "react";
import { IFields } from "@/modules/players/interfaces/IPlayers";
import { getPlayer } from "@/api/players";
import moment from "moment";

interface IContext {
    id: number
    error: boolean
    loading: boolean
    player: IFields | null
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

const EditContext = createContext<IContext>(initState);

export const useEdit = (): IContext => useContext(EditContext);

export const EditProvider: FC<Props> = (props) => {
    const { id, children } = props;
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [player, setPlayer] = useState<IFields | null>(null);

    useEffect(() => {
        void onHandleGet(id);
    }, [id]);

    const onHandleGet = async (id: number): Promise<void> => {
        setError(false);
        setLoading(true);

        try {
            const player = await getPlayer(id);
            const data = player.data;
            const position = data.position;
            const date = moment(data.birthday, "YYYY-MM-DD[T]HH:mm:ss").format("YYYY-MM-DD");

            const teamOption = { label: data.teamName, value: data.team };
            const playerOption = { label: position, value: position };

            const obj = Object.assign(data, {
                team: teamOption,
                position: playerOption,
                birthday: date
            });

            setPlayer(obj);
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <EditContext.Provider value={{ id, error, loading, player }}>
            {children}
        </EditContext.Provider>
    );
};
