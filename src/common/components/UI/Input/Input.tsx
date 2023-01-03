import React, { FC } from "react";
import classNames from "classnames";
import InputBase from "@/common/components/UI/InputBase/InputBase";
import styles from "./Input.module.sass";

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
    label: string
    disabled?: boolean
    className?: string
    error?: string
    fullWidth?: boolean

    // all other props
    [x: string]: any
}

export const Input: FC<Props> = (props) => {
    const { value, onChange, label, disabled, className, error, fullWidth, ...rest } = props;

    return (
        <div className={classNames(styles.wrapper, className)}>
            <label className={styles.label}>{label}</label>
            <InputBase
                onChange={onChange}
                value={value}
                fullWidth={fullWidth}
                error={error}
                disabled={disabled}
                {...rest}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
