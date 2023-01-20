import React from "react";
import { MultiValue } from "@/common/components/UI/Select/components/MultiValue";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { style } from "@/common/components/UI/Select/style";
import { Label } from "@/common/components/UI/Label";
import { Error } from "@/common/components/UI/Error";
import { GroupBase } from "react-select";

interface CustomProps {
    label?: string
    error?: string
    variant?: "primary" | "secondary"
}

export function Async<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: AsyncProps<Option, IsMulti, Group> & CustomProps): JSX.Element {
    const { className, components, label, variant = "primary", error, ...rest } = props;
    const MultiValueComponent = MultiValue<Option>;
    const styles = style<Option, IsMulti, Group>({
        variant,
        error
    });
    
    return (
        <div className={className}>
            {label && <Label>Position</Label>}
            <AsyncSelect
                menuPlacement="auto"
                styles={styles}
                components={{
                    MultiValue: MultiValueComponent,
                    ...components
                }}
                {...rest}
            />
            {error && <Error>{error}</Error>}
        </div>
    );
}
