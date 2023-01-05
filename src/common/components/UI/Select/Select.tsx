import React from "react";
import ReactSelect, { GroupBase, Props as SelectProps, StylesConfig } from "react-select";

interface Props {
    fullWidth?: boolean
}

export function Select<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: SelectProps<Option, IsMulti, Group> & Props): JSX.Element {
    const { fullWidth, ...rest } = props;

    const style: StylesConfig<Option, IsMulti, Group> = {
        container: (styles) => ({
            ...styles,
            width: props.fullWidth ? "100%" : "auto"
        }),
        control: (styles) => ({
            ...styles
        }),
        option: (styles) => ({
            ...styles
        }),
        multiValue: (styles) => ({
            ...styles,
            backgroundColor: "#E4163A",
            color: "white"
        }),
        multiValueLabel: (styles) => ({
            ...styles,
            color: "white"
        }),
        multiValueRemove: (styles) => ({
            ...styles
        })
    };

    return (
        <ReactSelect 
            menuPlacement="auto"
            styles={style}
            {...rest}
        />
    );
}
