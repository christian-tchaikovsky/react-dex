import React, { FC } from "react";
import { Link as Anchor } from "react-router-dom";
import classNames from "classnames";
import styles from "./Link.module.sass";

interface Props {
    children: string
    to: string
    className: string

    // all other props
    [x: string]: any
}

export const Link: FC<Props> = (props) => {
    const { children, to, className, ...rest } = props;

    return (
        <Anchor
            className={classNames(styles.link, className)}
            to={to}
            {...rest}
        >
            {children}
        </Anchor>
    );
};
