import React, { FC } from "react";
import { Typography } from "@/common/components/UI/Typography";
import classNames from "classnames";
import styles from "./Caption.module.sass";

interface Props {
    path: string[]
    separator?: string
    actions?: React.ReactNode
    className?: string
}

const Text: FC<{ children: string }> = ({ children }) => (
    <Typography className={styles.text}>{children}</Typography>
);

const Separator: FC<{ children: string }> = ({ children }) => (
    <Typography className={styles.separator}>{children}</Typography>
);

export const Caption: FC<Props> = (props) => {
    const { path: title, separator = "/", actions, className } = props;

    const path = React.useMemo(function () {
        return title
            .map<React.ReactNode>(t => <Text key={t}>{t}</Text>)
            .reduce((prev, curr, index) => [prev, <Separator key={index}>{separator}</Separator>, curr]);
    }, []);

    return (
        <div className={classNames(styles.caption, className)}>
            <div className={styles.path}>
                {path}
            </div>
            {actions && (
                <div className={styles.actions}>
                    {actions}
                </div>
            )}
        </div>
    );
};
