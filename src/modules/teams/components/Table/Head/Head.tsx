import React, { FC } from "react";
import { useMatchMedia } from "@/common/hooks/useMatchMedia";
import { Condition } from "@/common/components/Condition";
import { desktop } from "@/common/constants/queries";

const queries = [
    desktop
];

export const Head: FC = () => {
    const [desktop] = useMatchMedia(queries);
    
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Player</th>
                <Condition condition={desktop} otherwise={null}>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Age</th>
                </Condition>
            </tr>
        </thead>
    );
};
