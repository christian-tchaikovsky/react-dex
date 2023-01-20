import React, { FC } from "react";

interface Props {
    condition: boolean
    children: React.ReactNode
    otherwise: React.ReactNode
}

export const Condition: FC<Props> = (props) => {
    const { children, condition, otherwise = null } = props;

    if (condition) return <>{children}</>;

    return <>{otherwise}</>;
};
