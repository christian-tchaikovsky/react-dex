import { GroupBase, StylesConfig } from "react-select";

export function style<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(): StylesConfig<Option, IsMulti, Group> {
    return {
        container: (styles) => ({
            ...styles,
            display: "inline-block"
        }),
        control: (styles) => ({
            ...styles,
            height: "40px"
        }),
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            fontSize: "14px",
            cursor: "pointer",
            color: (isSelected || isFocused)
                ? "#ffffff"
                : "#9c9c9c",
            backgroundColor: isSelected
                ? "#c60e2e"
                : isFocused
                    ? "#ff768e"
                    : "transparent",

            ":active": {
                backgroundColor: "#c60e2e",
                color: "#ffffff"
            }
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
