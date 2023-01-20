import React, { FC } from "react";
import { IconKeys, icons } from "@/common/assets/icons";

interface Props {
    name?: IconKeys
    className?: string

    // all other props
    [x: string]: any
}

export const Icon: FC<Props> = (props) => {
    const { name, className, ...rest } = props;

    const Component = name ? icons[name] : null;

    if (!Component) return null;

    return <Component className={className} {...rest} />;
};
