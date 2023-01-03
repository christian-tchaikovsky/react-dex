import React, { FC, ReactNode } from "react";
import { SideBar } from "@/common/components/SideBar";
import { Header } from "@/common/components/Header";
import styles from "./Wrapper.module.sass";

interface Props {
    children: ReactNode
}

export const Wrapper: FC<Props> = ({ children }) => (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.content}>
            <SideBar/>
            <main>{children}</main>
        </div>
    </div>
);
