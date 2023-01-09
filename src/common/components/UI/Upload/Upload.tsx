import React, { FC, useEffect, useState } from "react";
import { upload } from "@/api/image";
import { useAppDispatch } from "@/common/hooks";
import { addNotification } from "@/common/reducers/notificationReducer";
import classNames from "classnames";
import styles from "./Upload.module.sass";

interface Props {
    onChange: (e?: string) => void
    className?: string
}

export const Upload: FC<Props> = (props) => {
    const { onChange, className } = props;
    const dispatch = useAppDispatch();
    const [selected, setSelected] = useState<File | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    useEffect(() => {
        if (!selected) {
            setPreview(undefined);
            onChange(undefined);
            return;
        }

        const preview = URL.createObjectURL(selected);
        onHandleUpload(selected, preview)
            .then(() => {
                dispatch(addNotification({
                    message: "Image successfully uploaded",
                    type: "success"
                }));
            })
            .catch(() => dispatch(addNotification("Image was not uploaded")));

        return () => URL.revokeObjectURL(preview);
    }, [selected]);

    async function onHandleUpload(file: File, preview: string): Promise<void> {
        const data = new FormData();
        data.append("file", file);

        const response = await upload(data);
        setPreview(preview);
        onChange(response.data);
    }

    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        if (!e.target.files?.[0]) {
            setSelected(undefined);
            return;
        }

        setSelected(e.target.files[0]);
    }

    return (
        <div className={classNames(styles.upload, className)}>
            <div className={styles.background} />
            <input
                type="file"
                accept="image/*"
                className={styles.input}
                onChange={onHandleChange}
            />
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className={styles.preview}
                />
            )}
        </div>
    );
};
