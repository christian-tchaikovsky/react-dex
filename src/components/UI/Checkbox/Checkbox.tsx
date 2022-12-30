import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.sass";

interface Props {
    label: string
    value: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Checkbox: FC<Props> = (props) => {
    const { label, value, onChange } = props;
    
    return (
        <label className={styles.checkbox}>
            <span className={classNames(styles.mark, { [styles.checked]: value })}/>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};
