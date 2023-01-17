import React, { FC } from "react";
import { MultiValue, ActionMeta, OnChangeValue } from "react-select";
import { Paginate } from "@/common/components/UI/Select/Paginate";
import { getTeams } from "@/api/teams";

interface Props {
    className?: string
    disabled?: boolean
    value: MultiValue<Option>
    onChange: (newValue: OnChangeValue<Option, true>, actionMeta: ActionMeta<Option>) => void
}

export interface Option {
    label: string
    value: number
}

export const SelectTeam: FC<Props> = (props) => {
    const { disabled, value, onChange, className } = props;

    async function loadOptions(name: string, callback: unknown, { page }: any) {
        const response = await getTeams({ Name: name, Page: page, PageSize: 10 });
        const { data: { data, count, size } } = response;
        const currentPage: number = page;

        return {
            options: data.map(data => ({ value: data.id, label: data.name })),
            hasMore: Math.ceil(count / size) > page,
            additional: {
                page: currentPage + 1
            }
        };
    }
    
    return (
        <Paginate
            isMulti
            value={value}
            defaultOptions
            onChange={onChange}
            isClearable={false}
            isDisabled={disabled}
            debounceTimeout={500}
            closeMenuOnSelect={false}
            loadOptions={loadOptions}
            loadOptionsOnMenuOpen={false}
            className={className}
            additional={{
                page: 1
            }}
        />
    );
};
