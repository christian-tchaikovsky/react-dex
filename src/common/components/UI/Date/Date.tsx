import React, { FC } from "react";
import { Input } from "@/common/components/UI/Input";

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string
    value?: string
    className?: string

    // all other props
    [x: string]: any
}

export const Date: FC<Props> = (props) => {
    const { label, value, onChange, className, ...rest } = props;
    
    return (
        <Input
            type="date"
            label={label}
            value={value}
            onChange={onChange}
            className={className}
            {...rest}
        />
    );
};
