import React, { FC } from "react";
import { Anchor } from "@/components/UI/Anchor";
import styles from "./SideBar.module.sass";

export const SideBar: FC = (): JSX.Element => {

    function clear(): void {
        localStorage.clear();
    }

    return (
        <header className={styles.sideBar}>
            <div className={styles.main}>
                <Anchor
                    to="/"
                    title="Главная"
                    icon="person_group"
                >
                    Teams
                </Anchor>
                <Anchor
                    to="/operations"
                    title="Операции"
                    icon="person"
                >
                    Players
                </Anchor>
            </div>
            <div className={styles.rest}>
                <Anchor
                    to="/login"
                    onClick={clear}
                    variant="secondary"
                    title="Профиль"
                    icon="input"
                >
                    Sign out
                </Anchor>
            </div>
        </header>
    );
};
