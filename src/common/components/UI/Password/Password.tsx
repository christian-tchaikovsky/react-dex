import React, { FC, useState } from "react";
import classNames from "classnames";
import { Icon } from "@/common/components/Icon";
import InputBase from "@/common/components/UI/InputBase/InputBase";
import styles from "./Password.module.sass";

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

export const Password: FC<Props> = (props) => {
    const { value, onChange, label, disabled, className, error, fullWidth, ...rest } = props;
    const [state, setState] = useState(false);

    const onHandleClick = (): void => {
        setState(prev => !prev);
    };

    return (
        <div className={classNames(styles.wrapper, className)}>
            <label className={styles.label}>{label}</label>
            <div className={classNames(styles.input, { [styles.block]: fullWidth })}>
                <InputBase
                    className={styles.password}
                    type={state ? "text" : "password"}
                    onChange={onChange}
                    value={value}
                    fullWidth={fullWidth}
                    error={error}
                    disabled={disabled}
                    {...rest}
                />
                <Icon
                    name={state ? "eye" : "close_eye"}
                    onClick={onHandleClick}
                    className={styles.icon}
                />
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
