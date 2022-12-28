import React, { FC } from "react";

interface Props {
    type?: "text"
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}

export const Input: FC<Props> = (props) => {
    const { type = "text", value, onChange } = props;

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
        />
    );
};
