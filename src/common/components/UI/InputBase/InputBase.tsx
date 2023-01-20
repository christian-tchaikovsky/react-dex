import React, { FC, forwardRef } from "react";
import classNames from "classnames";
import styles from "./InputBase.module.sass";

interface Props {
    type?: "text" | "password" | "date"
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value?: string | number
    disabled?: boolean
    className?: string
    error?: string
    fullWidth?: boolean

    // all other props
    [x: string]: any
}

export const InputBase: FC<Props> = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { type = "text", value, onChange, disabled, className, error, fullWidth, ...rest } = props;

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={classNames(
                styles.input, {
                    [styles.error]: error,
                    [styles.fullWidth]: fullWidth
                },
                className
            )}
            {...rest}
        />
    );
});

InputBase.displayName = "InputBase";
