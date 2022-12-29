import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Wrapper } from "@/layouts/Wrapper";

export const PrivateRoute = (): JSX.Element | null => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const user = localStorage.getItem("user");

    useEffect(() => {
        setIsAuthenticated(!!user);
    }, [user]);

    if (isAuthenticated === null) return null;

    return (
        isAuthenticated
            ? <Wrapper><Outlet/></Wrapper>
            : <Navigate to='/login'/>
    );
};
