import React, { FC } from "react";
import { MultiValue, ActionMeta, OnChangeValue } from "react-select";
import { Async } from "@/common/components/UI/Select/Async";
import { getTeams } from "@/api/teams";
import styles from "@/pages/Players/Players.module.sass";

interface Props {
    value: MultiValue<Option>
    onChange: (newValue: OnChangeValue<Option, true>, actionMeta: ActionMeta<Option>) => void
}

export interface Option {
    label: string
    value: number
}

export const Select: FC<Props> = (props) => {
    const { value, onChange } = props;

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
        <Async
            isMulti
            value={value}
            defaultOptions
            onChange={onChange}
            isClearable={false}
            debounceTimeout={500}
            closeMenuOnSelect={false}
            loadOptions={loadOptions}
            className={styles["select-team"]}
            additional={{
                page: 1
            }}
        />
    );
};
