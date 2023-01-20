import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./FormActions.module.sass";

interface Props {
    children: ReactNode
    className?: string
}

export const FormActions: FC<Props> = ({ children, className }) => (
    <div className={classNames(styles["form-actions"], className)}>
        {children}
    </div>
);
