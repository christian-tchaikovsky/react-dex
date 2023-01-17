import { GroupBase, StylesConfig } from "react-select";

interface CustomProps {
    variant?: "primary" | "secondary"
}

export function style<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: CustomProps = {}): StylesConfig<Option, IsMulti, Group> {
    const { variant } = props;

    return {
        control: (styles) => ({
            ...styles,
            height: "40px",
            fontWeight: 500,
            border: variant === "primary"
                ? "1px solid #d1d1d1"
                : "none",
            backgroundColor: variant === "primary"
                ? "#ffffff"
                : "#f6f6f6"
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
        placeholder: (styles) => ({
            ...styles,
            color: "#707070"
        }),
        singleValue: (styles) => ({
            ...styles,
            color: "#303030"
        }),
        indicatorsContainer: (styles) => ({
            ...styles,
            cursor: "pointer",
            svg: { fill: "#d1d1d1" }
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            backgroundColor: "#d1d1d1"
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
