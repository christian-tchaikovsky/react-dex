import React, { FC } from "react";
import styles from "./Input.module.sass";
import classNames from "classnames";

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
            <input
                type="text"
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={classNames(
                    styles.input, {
                        [styles.error]: error,
                        [styles.fullWidth]: fullWidth
                    }
                )}
                {...rest}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
