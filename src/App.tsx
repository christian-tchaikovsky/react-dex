import React from "react";
import { Login } from "@/pages/Login";
import { Add } from "@/pages/Teams/Add";
import { Logout } from "@/pages/Logout";
import { NoMatch } from "@/pages/NoMatch";
import { Teams } from "@/pages/Teams/Teams";
import { Details } from "@/pages/Teams/Details";
import { Register } from "@/pages/Register/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "@/routes/PrivateRoute";
import { paths } from "@/routes/constants/paths";
import withNotification from "@/common/hoc/withNotification";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path={paths.login} element={<Login/>}/>
            <Route path={paths.logout} element={<Logout/>}/>
            <Route path={paths.register} element={<Register/>}/>
            <Route path={paths.other} element={<NoMatch/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path={paths.teams} element={<Teams/>}/>
                <Route path={paths.teams_add} element={<Add/>}/>
                <Route path={paths.teams_details} element={<Details/>}/>
                <Route path={paths.players} element={<div>Players</div>}/>
                <Route path={paths.profile} element={<div>Profile</div>}/>
                <Route path={paths.main} element={<Navigate to={paths.teams}/>}/>
            </Route>
        </Routes>
    );
}

export default withNotification(App, 3);
