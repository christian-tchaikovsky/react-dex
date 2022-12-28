import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Typography.module.sass";

interface Props {
    children: string
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
    color?: "primary" | "secondary" | "red"
    size?: "small" | "medium" | "large"
    className?: string
}

export const Typography: FC<Props> = (props) => {
    const { children, size = "small", color = "primary", className, tag: Component = "span" } = props;
    
    return (
        <Component
            className={classNames(
                styles.typography,
                styles[color],
                styles[size], 
                className
            )}
        >
            {children}
        </Component>
    );
};
