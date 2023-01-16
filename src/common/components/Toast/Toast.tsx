import React, { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/common/hooks";
import { removeToast } from "@/common/reducers/toastsReducer";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import styles from "./Toast.module.sass";

interface Props {
    id: string
    message: string
    delay: number
    type?: "success" | "warning" | "error" | "info"
}

export const Toast: FC<Props> = ({ id, message, delay, type = "error" }) => {
    const [state, setState] = useState(true);
    const nodeRef = useRef(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(false);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay, id]);

    const onClick = (): void => {
        setState(false);
    };

    const onExit = () => {
        dispatch(removeToast(id));
    };

    return (
        <Transition
            in={state}
            mountOnEnter
            unmountOnExit
            timeout={350}
            onExit={onExit}
            nodeRef={nodeRef}
        >
            {state => (
                <div
                    ref={nodeRef}
                    onClick={onClick}
                    className={classNames(
                        styles.toast,
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
