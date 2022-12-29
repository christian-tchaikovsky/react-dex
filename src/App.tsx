import React from "react";
import { SignIn } from "@/pages/SignIn";
import { Routes, Route } from "react-router-dom";
import withNotification from "@/hoc/withNotification";
import styles from "./App.module.sass";

function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/" element={<div>Main</div>}/>
            </Routes>
        </div>
    );
}

export default withNotification(App, 3);
