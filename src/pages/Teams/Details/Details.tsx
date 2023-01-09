import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Table } from "@/modules/teams/components/Table";

export const Details: FC = () => {
    const { id } = useParams();

    console.log(id);

    return (
        <div>
            <Table data=""/>
        </div>
    );
};
