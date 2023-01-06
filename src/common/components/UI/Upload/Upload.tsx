import React, { FC, useState } from "react";
import classNames from "classnames";
import styles from "./Upload.module.sass";

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    className?: string
}

export const Upload: FC<Props> = (props) => {
    const { onChange, className } = props;
    const [preview, setPreview] = useState<string | null>(null);

    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        if (!e.target.files) return;

        e.target.files[0]
            ? setPreview(URL.createObjectURL(e.target.files[0]))
            : setPreview(null);

        onChange(e);
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
