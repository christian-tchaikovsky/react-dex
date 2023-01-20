import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./FormHeader.module.sass";

interface Props {
    children: ReactNode
    className?: string
}

export const FormHeader: FC<Props> = ({ children, className }) => (
    <div className={classNames(styles["form-header"], className)}>
        {children}
    </div>
);
