import { FC, useEffect } from "react";
import { paths } from "@/routes/constants/paths";

export const Logout: FC = () => {
    
    useEffect(() => {
        // clear localStorage on exit
        localStorage.clear();

        // locate to login page
        window.location.href = paths.login;
    }, []);
    
    return null;
};
