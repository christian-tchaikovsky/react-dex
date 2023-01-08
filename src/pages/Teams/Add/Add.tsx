import React, { FC } from "react";
import { Upload } from "@/common/components/UI/Upload/Upload";
import { Typography } from "@/common/components/UI/Typography";
import { Input } from "@/common/components/UI/Input";
import { Button } from "@/common/components/UI/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFields } from "@/modules/teams/interfaces/IAdd";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { validationSchema } from "./schema";
import styles from "./Teams.module.sass";

export const Add: FC = () => {
    const { handleSubmit, register } = useForm<IFields>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<IFields> = async data => {
        console.log(data);
    };

    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        if (!e.target.files) return;

        const file = e.target.files[0];
        console.log(file);
    }

    return (
        <div className={styles["teams-add"]}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Typography className={styles.text}>Teams</Typography>
                    <Typography className={styles["forward-slash"]}>/</Typography>
                    <Typography className={styles.text}>Add new team</Typography>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Upload className={styles.upload} onChange={onHandleChange}/>
                    <div className={styles.fields}>
                        <Input
                            {...register("name")}
                            label="Name"
                            className={styles.input}
                            fullWidth
                        />
                        <Input
                            {...register("division")}
                            label="Division"
                            className={styles.input}
                            fullWidth
                        />
                        <Input
                            {...register("conference")}
                            label="Conference"
                            className={styles.input}
                            fullWidth
                        />
                        <Input
                            {...register("foundationYear")}
                            label="Year of foundation"
                            className={styles.input}
                            fullWidth
                        />
                        <div className={styles.actions}>
                            <Button
                                type={"reset"}
                                variant="secondary"
                                fullWidth
                            >
                                Cancel
                            </Button>
                            <Button
                                type={"submit"}
                                fullWidth
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
