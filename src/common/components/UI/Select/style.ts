import { GroupBase, StylesConfig } from "react-select";

interface Args {
    fullWidth?: boolean
}

export function style<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>({ fullWidth }: Args): StylesConfig<Option, IsMulti, Group> {
    return {
        container: (styles) => ({
            ...styles,
            width: fullWidth ? "100%" : "auto"
        }),
        control: (styles) => ({
            ...styles
        }),
        option: (styles) => ({
            ...styles,
            fontSize: "14px",
            color: "#9C9C9C",
            backgroundColor: "transparent"
        }),
        valueContainer: (styles) => ({
            ...styles,
            fontSize: "14px"
        }),
        multiValue: (styles) => ({
            ...styles,
            color: "white",
            backgroundColor: "#E4163A"
        }),
        multiValueLabel: (styles) => ({
            ...styles,
            color: "white",
            fontSize: "14px"
        }),
        multiValueRemove: (styles) => ({
            ...styles
        })
    };
}
