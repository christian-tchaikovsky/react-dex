import React, { FC } from "react";
import { InputBase } from "@/common/components/UI/InputBase";
import { Icon } from "@/common/components/Icon";
import classNames from "classnames";
import styles from "./Search.module.sass";

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
    className?: string
    onSearch?: () => void

    // all other props
    [x: string]: any
}

export const Search: FC<Props> = (props) => {
    const { value, onChange, className, onSearch } = props;

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (!onSearch) return;

        if (event.key === "Enter") {
            onSearch();
        }
    };
    
    return (
        <div className={classNames(styles.search, className)}>
            <InputBase
                type="text"
                className={styles.input}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
            />
            <Icon onClick={onSearch} className={styles.icon} name="search"/>
        </div>
    );
};
