import React from "react";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { GroupBase } from "react-select";
import { MultiValue } from "@/common/components/UI/Select/components/MultiValue";
import { style } from "@/common/components/UI/Select/style";

export function Async<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: AsyncProps<Option, IsMulti, Group>): JSX.Element {
    const { components } = props;
    const MultiValueComponent = MultiValue<Option>;
    const styles = style<Option, IsMulti, Group>();
    
    return (
        <AsyncSelect
            menuPlacement="auto"
            styles={styles}
            components={{
                MultiValue: MultiValueComponent,
                ...components
            }}
            {...props}
        />
    );
}
