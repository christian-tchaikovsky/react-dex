import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { Icon } from "@/common/components/Icon";
import styles from "./Paginate.module.sass";

interface Props {
    count: number
    onChange: (e: { selected: number }) => void
}

export const Paginate: FC<Props> = (props) => {
    const { count, onChange } = props;
    
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={<Icon name="next" />}
            previousLabel={<Icon name="prev" />}
            onPageChange={onChange}
            pageRangeDisplayed={1}
            pageCount={count}
            disabledClassName={styles.disabled}
            previousLinkClassName={styles.prev}
            activeLinkClassName={styles.active}
            containerClassName={styles.paging}
            breakLinkClassName={styles.break}
            pageLinkClassName={styles.page}
            nextLinkClassName={styles.next}
        />
    );
};
