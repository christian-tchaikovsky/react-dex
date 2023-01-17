import React, { FC, useState } from "react";
import { IOption, SelectPosition } from "@/modules/players/components/Select/Position";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { FormBody } from "@/common/components/Form/FormBody";
import { SingleValue } from "react-select";
import { paths } from "@/routes/paths";
import styles from "./Add.module.sass";

export const Add: FC = () => {
    const [option, setOption] = useState<SingleValue<IOption>>(null);
    const breadcrumbs = [
        { name: "Players", to: paths.players },
        { name: "Add new player", to: "" }
    ];

    return (
        <div>
            <FormHeader>
                <Breadcrumbs path={breadcrumbs}/>
            </FormHeader>
            <FormBody className={styles["form-body"]}>
                <SelectPosition
                    value={option}
                    onChange={value => setOption(value)}
                    className={styles["select-position"]}
                />
            </FormBody>
        </div>
    );
};
