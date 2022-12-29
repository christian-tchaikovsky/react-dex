import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks";
import { removeNotification } from "@/store/reducers/notificationReducer";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import styles from "./Notification.module.sass";

interface Props {
    id: string
    message: string
    delay: number
    type?: "success" | "warning" | "error" | "info"
}

export const Notification: FC<Props> = ({ id, message, delay, type = "error" }) => {
    const [state, setState] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay, id]);

    const onClick = (): void => {
        setState(false);
    };

    const onExit = (): void => {
        dispatch(removeNotification(id));
    };

    return (
        <Transition
            in={state}
            mountOnEnter
            timeout={350}
            onExited={onExit}
        >
            {state => (
                <div
                    onClick={onClick}
                    className={classNames(
                        styles.notification,
                        styles[`animation-${state}`],
                        styles[type]
                    )}
                >
                    {message}
                </div>
            )}
        </Transition>
    );
};
