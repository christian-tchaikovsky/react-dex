import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.sass";

interface Props {
    label: string
    value: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    className?: string
    error?: string

    // all other props
    [x: string]: any
}

export const Checkbox: FC<Props> = (props) => {
    const { label, value, onChange, className, error, ...rest } = props;
    
    return (
        <div className={classNames(styles.checkbox, className)} {...rest}>
            <label className={classNames(styles.label, { [styles.error]: error })}>
                <span className={classNames(styles.mark, { [styles.checked]: value })}/>
                <input type="checkbox" checked={value} onChange={onChange} />
                {label}
            </label>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};
