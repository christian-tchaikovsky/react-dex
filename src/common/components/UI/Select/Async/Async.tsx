import React from "react";
import { AsyncPaginate, AsyncPaginateProps } from "react-select-async-paginate";
import { MultiValue } from "../components/MultiValue";
import { GroupBase } from "react-select";
import { style } from "../style";

export function Async<
    OptionType,
    Additional,
    Group extends GroupBase<OptionType>,
    IsMulti extends boolean = false
>(props: AsyncPaginateProps<OptionType, Group, Additional, IsMulti>): JSX.Element {
    const { components, ...rest } = props;
    const MultiValueComponent = MultiValue<OptionType>;
    const styles = style<OptionType, IsMulti, Group>();

    return (
        <AsyncPaginate
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
