import React, { useState, createContext, FC, useContext, useEffect } from "react";
import { useMatchMedia } from "@/common/hooks/useMatchMedia";

interface IContext {
    state: boolean
    mobile: boolean
    onChangeHandler?: () => void
}

interface Props {
    children: React.ReactNode
}

const initState = {
    state: true,
    mobile: false
};

const Context = createContext<IContext>(initState);

export const useNavigationContext = (): IContext => {
    const context = useContext(Context);

    if (context) return context;

    throw new Error("Context must be used within Provider!");
};

export const NavigationProvider: FC<Props> = (props) => {
    const { children } = props;
    const [mobile] = useMatchMedia();
    const [state, setState] = useState(true);

    const onChangeHandler = (): void => {
        setState(prev => !prev);
    };

    useEffect(() => {
        mobile
            ? setState(false)
            : setState(true);
    }, [mobile]);

    return (
        <Context.Provider value={{ state, mobile, onChangeHandler }}>
            {children}
        </Context.Provider>
    );
};
