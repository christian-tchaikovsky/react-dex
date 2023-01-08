import React, { FC, forwardRef } from "react";
import { Input } from "@/common/components/UI/Input";

interface Props {
    label: string
    value?: number
    onChange: (e: number | null) => void

    // all other props
    [x: string]: any
}

export const Number: FC<Props> = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { label, onChange, value, ...rest } = props;

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const state = e.target.value ? parseInt(e.target.value) : null;
        onChange(state);
    };

    return (
        <Input
            ref={ref}
            label={label}
            value={value?.toString()}
            onChange={onHandleChange}
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
