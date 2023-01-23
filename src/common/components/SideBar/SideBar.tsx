import React, { FC } from "react";
import { useNavigationContext } from "@/common/contexts/NavigationContext";
import { Condition } from "@/common/components/Condition";
import { Anchor } from "@/common/components/UI/Anchor";
import { paths } from "@/routes/paths";
import classNames from "classnames";
import styles from "./SideBar.module.sass";

export const SideBar: FC = (): JSX.Element => {
    const { mobile, state, onChangeHandler } = useNavigationContext();

    return (
        <div className={classNames(
            styles["sidebar-inner"], {
                [styles.mobile]: mobile,
                [styles.open]: state
            }
        )}>
            <Condition condition={state} otherwise={null}>
                <div
                    onClick={onChangeHandler}
                    className={styles.backdrop}
                />
            </Condition>
            <div className={classNames(styles.sidebar)}>
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
        </div>
    );
};
