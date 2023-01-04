import React, { FC, useState } from "react";
import ReactSelect, { SingleValue, StylesConfig } from "react-select";

interface OptionType {
    value: number
    label: string
}

const options: OptionType[] = [
    { value: 6, label: "6" },
    { value: 12, label: "12" },
    { value: 24, label: "24" }
];

const styles: StylesConfig<SingleValue<OptionType>, false> = {
    control: (styles) => ({ ...styles }),
    option: (styles, {
        data,
        isDisabled,
        isFocused,
        isSelected
    }) => ({
        ...styles

    }),
    multiValue: (styles, { data }) => ({
        ...styles
    }),
    multiValueLabel: (styles, { data }) => ({
        ...styles
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles
    })
};

export const Select: FC = () => {
    const [option, setOption] = useState<SingleValue<OptionType>>(options[0]);

    return (
        <ReactSelect
            onChange={e => setOption(e)}
            value={option}
            options={options}
            styles={styles}
        />
    );
};
