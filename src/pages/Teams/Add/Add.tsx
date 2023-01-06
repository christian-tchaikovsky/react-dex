import React, { FC } from "react";
import { Upload } from "@/common/components/UI/Upload/Upload";
import styles from "./Teams.module.sass";

export const Add: FC = () => {
    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        if (!e.target.files) return;

        const file = e.target.files[0];
        console.log(file);
    }

    return (
        <div className={styles["teams-add"]}>
            <Upload onChange={onHandleChange}/>
        </div>
    );
};
