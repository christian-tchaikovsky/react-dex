import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.sass";

interface Props {
    label: string
    value: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    className?: string

    // all other props
    [x: string]: any
}

export const Checkbox: FC<Props> = (props) => {
    const { label, value, onChange, className, ...rest } = props;
    
    return (
        <label className={classNames(styles.checkbox, className)} {...rest}>
            <span className={classNames(styles.mark, { [styles.checked]: value })}/>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};
