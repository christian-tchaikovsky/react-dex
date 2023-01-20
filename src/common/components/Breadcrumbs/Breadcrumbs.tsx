import React, { FC, useMemo } from "react";
import { Typography } from "@/common/components/UI/Typography";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";

interface IPath {
    name: string
    to: string
}

interface Props {
    path: IPath[]
    separator?: string
    actions?: React.ReactNode
    className?: string
}

const Text: FC<IPath> = ({ name, to }) => (
    <Link className={styles.link} to={to}>
        <Typography className={styles.text}>{name}</Typography>
    </Link>
);

const Separator: FC<{ children: string }> = ({ children }) => (
    <Typography className={styles.separator}>{children}</Typography>
);

export const Breadcrumbs: FC<Props> = (props) => {
    const { path: breadcrumbs, separator = "/", className } = props;

    const path = useMemo(function () {
        return breadcrumbs
            .map<React.ReactNode>(path => <Text key={path.to} to={path.to} name={path.name} />)
            .reduce((prev, curr, index) => {
                return [prev, <Separator key={index}>{separator}</Separator>, curr];
            });
    }, []);

    return (
        <div className={classNames(styles.caption, className)}>
            <div className={styles.path}>
                {path}
            </div>
        </div>
    );
};
