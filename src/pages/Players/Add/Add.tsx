import React, { FC } from "react";
import { FormHeader } from "@/common/components/Form/FormHeader";
import { Breadcrumbs } from "@/common/components/Breadcrumbs";
import { FormBody } from "@/common/components/Form/FormBody";
import { Form } from "@/modules/players/components/Form";
import { paths } from "@/routes/paths";
import styles from "./Add.module.sass";

export const Add: FC = () => {
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
                <Form
                    onSubmit={() => console.log("data")} 
                    onCancel={() => console.log("canceled")}
                />
            </FormBody>
        </div>
    );
};
