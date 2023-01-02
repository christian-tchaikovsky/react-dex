import React from "react";
import { Login } from "@/pages/Login";
import { Logout } from "@/pages/Logout";
import { NoMatch } from "@/pages/NoMatch";
import { Register } from "@/pages/Register/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "@/routes/PrivateRoute";
import withNotification from "@/hoc/withNotification";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<NoMatch/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path="/" element={<Navigate to="/teams"/>}/>
                <Route path="/teams" element={<div>Teams</div>}/>
                <Route path="/players" element={<div>Players</div>}/>
                <Route path="/profile" element={<div>Profile</div>}/>
            </Route>
        </Routes>
    );
}

export default withNotification(App, 3);
