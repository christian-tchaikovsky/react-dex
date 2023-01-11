import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Upload } from "@/common/components/UI/Upload";
import { Input } from "@/common/components/UI/Input";
import { Number } from "@/common/components/UI/Number";
import { Button } from "@/common/components/UI/Button";
import { IFields } from "@/modules/teams/interfaces/IAdd";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { validationSchema } from "./schema";
import styles from "./Form.module.sass";

interface Props {
    onSubmit: SubmitHandler<IFields>
    onCancel: () => void
    defaultValue?: Partial<IFields>
}

export const Form: FC<Props> = (props) => {
    const { onSubmit, onCancel, defaultValue } = props;
    const { handleSubmit, register, control, formState: { errors } } = useForm<IFields>({
        resolver: yupResolver(validationSchema),
        defaultValues: defaultValue
    });
    
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="imageUrl"
                render={({ field: { onChange, value } }) => (
                    <Upload
                        defaultValue={value}
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
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Number
                            label="Year of foundation"
                            value={value}
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
                        onClick={onCancel}
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
    );
};
