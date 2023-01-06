import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { Icon } from "@/common/components/Icon";
import styles from "./Paginate.module.sass";

interface Props {
    count: number
    onChange: (e: { selected: number }) => void
    value?: number
}

export const Paginate: FC<Props> = (props) => {
    const { count, onChange, value } = props;

    const forcePage = value ? value - 1 : undefined;

    function onHandleChange(e: { selected: number }): void {
        e.selected = e.selected + 1;
        onChange(e);
    }

    return (
        <ReactPaginate
            breakLabel="..."
            onPageChange={onHandleChange}
            forcePage={forcePage}
            pageRangeDisplayed={1}
            pageCount={count}
            disabledClassName={styles.disabled}
            previousLinkClassName={styles.prev}
            activeLinkClassName={styles.active}
            containerClassName={styles.paging}
            breakLinkClassName={styles.break}
            pageLinkClassName={styles.page}
            nextLinkClassName={styles.next}
            nextLabel={<Icon name="next" />}
            previousLabel={<Icon name="prev" />}
        />
    );
};
