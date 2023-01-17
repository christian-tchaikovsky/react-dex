import React from "react";
import { MultiValue } from "@/common/components/UI/Select/components/MultiValue";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { style } from "@/common/components/UI/Select/style";
import { Label } from "@/common/components/UI/Label";
import { GroupBase } from "react-select";

interface CustomProps {
    label?: string
    variant?: "primary" | "secondary"
}

export function Async<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: AsyncProps<Option, IsMulti, Group> & CustomProps): JSX.Element {
    const { components, label, variant = "primary" } = props;
    const MultiValueComponent = MultiValue<Option>;
    const styles = style<Option, IsMulti, Group>({
        variant
    });
    
    return (
        <div>
            {label && <Label>Position</Label>}
            <AsyncSelect
                menuPlacement="auto"
                styles={styles}
                components={{
                    MultiValue: MultiValueComponent,
                    ...components
                }}
                {...props}
            />
        </div>
    );
}
