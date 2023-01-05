import React from "react";
import { components, MultiValueProps } from "react-select";
import styles from "../Select.module.sass";

const MoreSelectedBadge = ({ items }: { items: any[] }): JSX.Element => {
    const title = items.join(", ");

    return (
        <div
            title={title}
            className={styles["multi-value-label"]}
        >
            ...
        </div>
    );
};

export function MultiValue<T>(props: MultiValueProps<T>): JSX.Element {
    const { index, getValue, children } = props;

    const maxToShow = 2;
    const overflow = getValue()
        .slice(maxToShow)
        .map((x: any) => x.label);

    return index >= maxToShow
        ? (
            <MoreSelectedBadge
                items={overflow}
            />
        )
        : (
            <components.MultiValue {...props}>
                {children}
            </components.MultiValue>
        );
}
