import React, { FC } from "react";
import InputBase from "@/common/components/UI/InputBase/InputBase";
import classNames from "classnames";
import styles from "./Search.module.sass";
import { Icon } from "@/common/components/Icon";

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
    className?: string

    // all other props
    [x: string]: any
}

export const Search: FC<Props> = (props) => {
    const { value, onChange, className } = props;
    
    return (
        <div className={classNames(styles.search, className)}>
            <InputBase
                type="text"
                className={styles.input}
                value={value}
                onChange={onChange}
                placeholder="Search..."
            />
            <Icon className={styles.icon} name="search"/>
        </div>
    );
};
