import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./FormBody.module.sass";

interface Props {
    children: ReactNode
    className?: string
}

export const FormBody: FC<Props> = ({ children, className }) => (
    <div className={classNames(styles["form-body"], className)}>
        {children}
    </div>
);
