import React, { FC } from "react";
import { InputBase } from "@/common/components/UI/InputBase";
import { Label } from "@/common/components/UI/Label";

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
        <div>
            <Label>{label}</Label>
            <InputBase
                type="date"
                value={value}
                onChange={onChange}
                className={className}
                {...rest}
            />
        </div>
    );
};
