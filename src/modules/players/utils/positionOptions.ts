import { getPositions } from "@/api/players";

export interface IOption {
    label: string
    value: string
}

export const positionOptions = async (): Promise<IOption[]> => {
    const response = await getPositions();
    const data = response.data;

    return data.map(position => ({
        label: position,
        value: position
    }));
};
