import React, { FC, forwardRef } from "react";
import { InputBase } from "@/common/components/UI/InputBase";
import { Label } from "@/common/components/UI/Label";
import { Error } from "@/common/components/UI/Error";
import classNames from "classnames";
import styles from "./Input.module.sass";

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value?: string | number
    label: string
    disabled?: boolean
    className?: string
    error?: string
    fullWidth?: boolean

    // all other props
    [x: string]: any
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { value, onChange, label, disabled, className, error, fullWidth, ...rest } = props;

    return (
        <div className={classNames(styles.wrapper, className)}>
            <Label>{label}</Label>
            <InputBase
                ref={ref}
                onChange={onChange}
                value={value}
                fullWidth={fullWidth}
                error={error}
                disabled={disabled}
                {...rest}
            />
            {error && <Error className={styles.error}>{error}</Error>}
        </div>
    );
});

Input.displayName = "Input";
