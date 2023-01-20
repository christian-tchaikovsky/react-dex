import { getTeams } from "@/api/teams";
import { GroupBase, OptionsOrGroups } from "react-select";

export interface IOption {
    label: string
    value: number
}

interface IAdditional {
    page: number
}

export async function teamOptions(
    name: string,
    callback: OptionsOrGroups<IOption, GroupBase<IOption>>,
    additional?: IAdditional
) {
    const page = additional ? additional.page : 1;
    const response = await getTeams({ Name: name, Page: page, PageSize: 10 });
    const { data: { data, count, size } } = response;

    return {
        options: data.map(option => ({ label: option.name, value: option.id })),
        hasMore: Math.ceil(count / size) > page,
        additional: {
            page: page + 1
        }
    };
}
