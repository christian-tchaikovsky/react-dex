import React from "react";
import { Login } from "@/pages/Login";
import { Logout } from "@/pages/Logout";
import { NoMatch } from "@/pages/NoMatch";
import { Players } from "@/pages/Players";
import { Profile } from "@/pages/Profile";
import { Teams } from "@/pages/Teams/Teams";
import { Add as AddTeam } from "@/pages/Teams/Add";
import { Register } from "@/pages/Register/Register";
import { Update as TeamEdit } from "@/pages/Teams/Update";
import { Add as AddPlayer } from "@/pages/Players/Add";
import { Update as EditPlayer } from "@/pages/Players/Update";
import { Details as TeamDetails } from "@/pages/Teams/Details";
import { Details as PlayerDetails } from "@/pages/Players/Details";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "@/routes/PrivateRoute";
import { paths } from "@/routes/paths";
import withToasts from "@/common/hoc/withToasts";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path={paths.login} element={<Login/>}/>
            <Route path={paths.logout} element={<Logout/>}/>
            <Route path={paths.register} element={<Register/>}/>
            <Route path={paths.other} element={<NoMatch/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path={paths.teams} element={<Teams/>}/>
                <Route path={paths.players} element={<Players/>}/>
                <Route path={paths.profile} element={<Profile/>}/>
                <Route path={paths.teams_add} element={<AddTeam/>}/>
                <Route path={paths.teams_edit} element={<TeamEdit/>}/>
                <Route path={paths.players_add} element={<AddPlayer/>}/>
                <Route path={paths.players_edit} element={<EditPlayer/>}/>
                <Route path={paths.teams_details} element={<TeamDetails/>}/>
                <Route path={paths.players_details} element={<PlayerDetails/>}/>
                <Route path={paths.main} element={<Navigate to={paths.teams}/>}/>
            </Route>
        </Routes>
    );
}

export default withToasts(App, 3);
