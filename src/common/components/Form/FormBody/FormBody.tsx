import React, { FC, ReactNode } from "react";
import styles from "./FormBody.module.sass";
import classNames from "classnames";

interface Props {
    children: ReactNode
    className?: string
}

export const FormBody: FC<Props> = ({ children, className }) => (
    <div className={classNames(styles["form-body"], className)}>
        {children}
    </div>
);
