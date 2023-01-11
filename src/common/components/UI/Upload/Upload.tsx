import React, { FC, useState } from "react";
import { upload } from "@/api/image";
import { useAppDispatch } from "@/common/hooks";
import { addNotification } from "@/common/reducers/notificationReducer";
import { useDidUpdateEffect } from "@/common/hooks/useDidUpdateEffect";
import classNames from "classnames";
import styles from "./Upload.module.sass";

interface Props {
    onChange: (e?: string) => void
    defaultValue?: string
    className?: string
}

export const Upload: FC<Props> = (props) => {
    const { onChange, className, defaultValue } = props;
    const dispatch = useAppDispatch();
    const [selected, setSelected] = useState<File>();
    const [preview, setPreview] = useState(defaultValue);

    useDidUpdateEffect(() => {
        if (!selected) {
            setPreview(undefined);
            onChange(undefined);
            return;
        }

        const preview = URL.createObjectURL(selected);

        void onHandleUpload(selected, preview);

        return () => URL.revokeObjectURL(preview);
    }, [selected]);

    async function onHandleUpload(file: File, preview: string): Promise<void> {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await upload(formData);
            const data = response.data;

            setPreview(preview);
            onChange(data);

            dispatch(addNotification({
                message: "Image successfully uploaded",
                type: "success"
            }));
        } catch (e) {
            dispatch(addNotification("Image was not uploaded"));
        }
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
