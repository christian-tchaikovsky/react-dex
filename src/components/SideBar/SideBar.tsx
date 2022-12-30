import React, { FC } from "react";
import { Anchor } from "@/components/UI/Anchor";
import styles from "./SideBar.module.sass";

export const SideBar: FC = (): JSX.Element => (
    <header className={styles.sideBar}>
        <div className={styles.main}>
            <Anchor
                to="/teams"
                title="Главная"
                icon="person_group"
            >
                    Teams
            </Anchor>
            <Anchor
                to="/players"
                title="Операции"
                icon="person"
            >
                    Players
            </Anchor>
        </div>
        <div className={styles.rest}>
            <Anchor
                to="/logout"
                variant="secondary"
                title="Профиль"
                icon="input"
            >
                    Sign out
            </Anchor>
        </div>
    </header>
);
