import React, { FC } from "react";
import { Async } from "@/common/components/UI/Select/Async/Async";
import { ActionMeta, OnChangeValue, SingleValue } from "react-select";
import { getPositions } from "@/api/players";

export interface IOption {
    label: string
    value: string
}

interface Props {
    className: string
    disabled?: boolean
    value: SingleValue<IOption>
    onChange: (newValue: OnChangeValue<IOption, false>, actionMeta: ActionMeta<IOption>) => void
}

export const SelectPosition: FC<Props> = (props) => {
    const { value, onChange, disabled, className } = props;

    const loadOptions = async (): Promise<IOption[]> => {
        const response = await getPositions();
        const data = response.data;

        return data.map(position => ({
            label: position,
            value: position
        }));
    };

    return (
        <Async
            cacheOptions
            value={value}
            defaultOptions
            onChange={onChange}
            className={className}
            isDisabled={disabled}
            loadOptions={loadOptions}
            getOptionLabel={e => e.label}
            getOptionValue={e => e.value}
        />
    );
};
