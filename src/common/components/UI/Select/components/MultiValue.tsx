import React, { FC } from "react";
import { components, MultiValueProps } from "react-select";
import styles from "./MultiValue.module.sass";

const MoreSelectedBadge: FC<{ items: string[] }> = ({ items }): JSX.Element => {
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

export function MultiValue<T>(props: MultiValueProps<T>): JSX.Element | null {
    const { index, getValue, children } = props;

    const maxToShow = 2;
    const overflow = getValue()
        .slice(maxToShow)
        .map((x: any) => x.label);

    return index < maxToShow
        ? <components.MultiValue {...props}>{children}</components.MultiValue>
        : index === maxToShow
            ? <MoreSelectedBadge items={overflow}/>
            : null;
}
