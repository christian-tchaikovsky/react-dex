import React, { FC, ReactNode } from "react";
import { NavigationProvider } from "@/common/contexts/NavigationContext";
import { SideBar } from "@/common/components/SideBar";
import { Header } from "@/common/components/Header";
import styles from "./MainLayout.module.sass";

interface Props {
    children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => (
    <NavigationProvider>
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.content}>
                <SideBar/>
                <main>{children}</main>
            </div>
        </div>
    </NavigationProvider>
);
