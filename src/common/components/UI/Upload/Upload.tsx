import React, { FC, useState } from "react";
import { upload } from "@/api/image";
import classNames from "classnames";
import styles from "./Upload.module.sass";
import { useAppDispatch } from "@/common/hooks";
import { addNotification } from "@/common/reducers/notificationReducer";

interface Props {
    onChange: (e: string) => void
    className?: string
}

export const Upload: FC<Props> = (props) => {
    const { onChange, className } = props;
    const dispatch = useAppDispatch();
    const [preview, setPreview] = useState<string | null>(null);

    async function onHandleUpload(e: React.ChangeEvent<HTMLInputElement>): Promise<void> {
        if (!e.target.files?.[0]) {
            setPreview(null);
            return;
        }

        const data = new FormData();
        const file = e.target.files[0];
        data.append("file", file);

        try {
            const response = await upload(data);
            setPreview(URL.createObjectURL(file));
            dispatch(addNotification({
                message: "Image successfully uploaded",
                type: "success"
            }));
            onChange(response.data);
        } catch (e) {
            dispatch(addNotification("Image was not uploaded"));
        }
    }

    return (
        <div className={classNames(styles.upload, className)}>
            <div className={styles.background} />
            <input
                type="file"
                accept="image/*"
                className={styles.input}
                onChange={onHandleUpload}
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
