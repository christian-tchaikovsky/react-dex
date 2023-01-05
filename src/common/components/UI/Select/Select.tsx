import React from "react";
import ReactSelect, { GroupBase, Props as SelectProps } from "react-select";
import { MultiValue } from "./components/MultiValue";
import { style } from "@/common/components/UI/Select/style";

interface Props {
    fullWidth?: boolean
}

export function Select<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: SelectProps<Option, IsMulti, Group> & Props): JSX.Element {
    const { fullWidth, ...rest } = props;
    const styles = style<Option, IsMulti, Group>({
        fullWidth
    });

    return (
        <ReactSelect
            menuPlacement="auto"
            styles={styles}
            components={{
                MultiValue: MultiValue<Option>
            }}
            {...rest}
        />
    );
}
