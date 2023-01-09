import React, { FC } from "react";
import { Upload } from "@/common/components/UI/Upload/Upload";
import { Typography } from "@/common/components/UI/Typography";
import { Input } from "@/common/components/UI/Input";
import { Number } from "@/common/components/UI/Number";
import { Button } from "@/common/components/UI/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFields } from "@/modules/teams/interfaces/IAdd";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { validationSchema } from "./schema";
import { addTeam } from "@/api/teams";
import { addNotification } from "@/common/reducers/notificationReducer";
import { useAppDispatch } from "@/common/hooks";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/constants/paths";
import styles from "./Teams.module.sass";

export const Add: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { handleSubmit, register, control, formState: { errors } } = useForm<IFields>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<IFields> = async data => {
        try {
            const response = await addTeam(data);
            const responseData = response.data;
            const name: string = responseData.name;

            dispatch(addNotification({
                message: `${name} was successfully added`,
                type: "success"
            }));

            navigate(paths.teams);
        } catch (e) {
            dispatch(addNotification("The team was not added"));
        }
    };

    return (
        <div className={styles["teams-add"]}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Typography className={styles.text}>Teams</Typography>
                    <Typography className={styles["forward-slash"]}>/</Typography>
                    <Typography className={styles.text}>Add new team</Typography>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="imageUrl"
                        render={({ field: { onChange } }) => (
                            <Upload
                                onChange={e => onChange(e)}
                                className={styles.upload}
                            />
                        )}
                    />
                    <div className={styles.fields}>
                        <Input
                            {...register("name")}
                            error={errors.name?.message}
                            label="Name"
                            className={styles.input}
                            fullWidth
                        />
                        <Input
                            {...register("division")}
                            error={errors.division?.message}
                            label="Division"
                            className={styles.input}
                            fullWidth
                        />
                        <Input
                            {...register("conference")}
                            error={errors.conference?.message}
                            label="Conference"
                            className={styles.input}
                            fullWidth
                        />
                        <Controller
                            control={control}
                            name="foundationYear"
                            render={({ field: { onChange }, fieldState: { error } }) => (
                                <Number
                                    label="Year of foundation"
                                    onChange={e => onChange(e)}
                                    className={styles.input}
                                    error={error?.message}
                                    fullWidth
                                />
                            )}
                        />
                        <div className={styles.actions}>
                            <Button
                                type={"button"}
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
