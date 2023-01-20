import React, { FC, forwardRef } from "react";
import { Input } from "@/common/components/UI/Input";

interface Props {
    label: string
    value?: number
    onChange: React.ChangeEventHandler

    // all other props
    [x: string]: any
}

export const Number: FC<Props> = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { label, onChange, value, ...rest } = props;

    return (
        <Input
            ref={ref}
            label={label}
            value={value}
            onChange={onChange}
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                }
            }}
            {...rest}
        />
    );
});

Number.displayName = "Number";
