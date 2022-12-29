import React, { FC, ReactNode } from "react";
import { SideBar } from "@/components/SideBar";
import styles from "./Wrapper.module.sass";

interface Props {
    children: ReactNode
}

export const Wrapper: FC<Props> = ({ children }) => (
    <div className={styles.Wrapper}>
        <SideBar/>
        <main>{children}</main>
    </div>
);
