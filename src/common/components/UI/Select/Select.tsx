import React from "react";
import ReactSelect, { GroupBase, Props as SelectProps } from "react-select";
import { MultiValue } from "./components/MultiValue";
import { style } from "@/common/components/UI/Select/style";

export function Select<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: SelectProps<Option, IsMulti, Group>): JSX.Element {
    const { components, ...rest } = props;
    const MultiValueComponent = MultiValue<Option>;
    const styles = style<Option, IsMulti, Group>({
        variant: "primary"
    });

    return (
        <ReactSelect
            menuPlacement="auto"
            styles={styles}
            components={{
                MultiValue: MultiValueComponent,
                ...components
            }}
            {...rest}
        />
    );
}
