import React, { FC } from "react";
import { Anchor } from "@/common/components/UI/Anchor";
import { paths } from "@/routes/constants/paths";
import styles from "./SideBar.module.sass";

export const SideBar: FC = (): JSX.Element => (
    <div className={styles.sideBar}>
        <nav className={styles.navigation}>
            <div className={styles.main}>
                <Anchor
                    to={paths.teams}
                    title="Главная"
                    icon="person_group"
                >
                   Teams
                </Anchor>
                <Anchor
                    to={paths.players}
                    title="Операции"
                    icon="person"
                >
                   Players
                </Anchor>
            </div>
            <div className={styles.rest}>
                <Anchor
                    to={paths.logout}
                    variant="secondary"
                    title="Профиль"
                    icon="input"
                >
                   Sign out
                </Anchor>
            </div>
        </nav>
    </div>
);
