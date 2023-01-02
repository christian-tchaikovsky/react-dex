import { FC, useEffect } from "react";

export const Logout: FC = () => {
    
    useEffect(() => {
        // clear localStorage on exit
        localStorage.clear();

        // locate to login page
        window.location.href = "/login";
    }, []);
    
    return null;
};
