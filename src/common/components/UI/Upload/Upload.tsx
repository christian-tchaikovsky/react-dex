import React, { FC, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { addToast } from "@/common/reducers/toastsReducer";
import { useAppDispatch } from "@/common/hooks";
import { upload } from "@/api/image";
import classNames from "classnames";
import styles from "./Upload.module.sass";

interface Props {
    onChange: (e?: string) => void
    value?: string
    className?: string
}

const baseUrl = process.env.REACT_APP_BASE_URL;

export const Upload: FC<Props> = (props) => {
    const { onChange, value = null, className } = props;
    const defaultValue = value && `${baseUrl}${value}`;
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<File>();
    const [preview, setPreview] = useState<string | null>(defaultValue);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            "image/jpeg": [],
            "image/png": []
        }
    });

    useEffect(() => {
        if (!file) return;

        const preview = URL.createObjectURL(file);
        void onHandleUpload(file, preview);

        return () => URL.revokeObjectURL(preview);
    }, [file]);

    // TODO Call functions on save
    async function onHandleUpload(file: File, preview: string): Promise<void> {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await upload(formData);
            const data = response.data;

            setPreview(preview);
            onChange(data);

            dispatch(addToast({
                message: "Image successfully uploaded",
                type: "success"
            }));
        } catch (e) {
            dispatch(addToast("Image was not uploaded"));
        }
    }

    function onDrop(acceptedFiles: File[]): void {
        setFile(acceptedFiles[0]);
    }

    return (
        <div {...getRootProps()} className={classNames(styles.upload, className)}>
            <input {...getInputProps()}/>
            <div className={styles.background}/>
            <div className={styles["thumb-container"]}>
                {preview && (
                    <img
                        alt="preview"
                        src={preview}
                        className={styles.thumb}
                    />
                )}
            </div>
        </div>
    );
};
