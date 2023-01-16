import React, { FC, ReactNode } from "react";
import styles from "./FormHeader.module.sass";
import classNames from "classnames";

interface Props {
    children: ReactNode
    className?: string
}

export const FormHeader: FC<Props> = ({ children, className }) => (
    <div className={classNames(styles["form-header"], className)}>
        {children}
    </div>
);
