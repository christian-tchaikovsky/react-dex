import React from "react";
import { AsyncPaginate, AsyncPaginateProps } from "react-select-async-paginate";
import { MultiValue } from "../components/MultiValue";
import { Label } from "@/common/components/UI/Label";
import { GroupBase } from "react-select";
import { style } from "../style";

interface CustomProps {
    label?: string
    variant?: "primary" | "secondary"
}

export function Paginate<
    OptionType,
    Additional,
    Group extends GroupBase<OptionType>,
    IsMulti extends boolean = false
>(props: AsyncPaginateProps<OptionType, Group, Additional, IsMulti> & CustomProps): JSX.Element {
    const { components, label, variant = "primary", ...rest } = props;
    const MultiValueComponent = MultiValue<OptionType>;
    const styles = style<OptionType, IsMulti, Group>({
        variant
    });

    return (
        <div>
            {label && <Label>{label}</Label>}
            <AsyncPaginate
                menuPlacement="auto"
                styles={styles}
                components={{
                    MultiValue: MultiValueComponent,
                    ...components
                }}
                {...rest}
            />
        </div>
    );
}
