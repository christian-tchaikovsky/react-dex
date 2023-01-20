import React, { FC, forwardRef } from "react";
import { Input } from "@/common/components/UI/Input";

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string
    value?: string
    className?: string

    // all other props
    [x: string]: any
}

export const Date: FC<Props> = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { label, value, onChange, className, ...rest } = props;

    return (
        <Input
            ref={ref}
            type="date"
            label={label}
            value={value}
            onChange={onChange}
            className={className}
            {...rest}
        />
    );
});

Date.displayName = "Date";
