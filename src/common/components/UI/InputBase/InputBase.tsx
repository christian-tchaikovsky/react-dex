import React, { FC } from "react";
import classNames from "classnames";
import styles from "./InputBase.module.sass";

interface Props {
    type?: "text" | "password"
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
    disabled?: boolean
    className?: string
    error?: string
    fullWidth?: boolean

    // all other props
    [x: string]: any
}

const InputBase: FC<Props> = (props) => {
    const { type = "text", value, onChange, disabled, className, error, fullWidth, ...rest } = props;
    
    return (
        <input
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
};

export default InputBase;
