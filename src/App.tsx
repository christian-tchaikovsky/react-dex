import React from "react";
import { SignIn } from "@/pages/SignIn";
import styles from "./App.module.sass";

function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <SignIn/>
        </div>
    );
}

export default App;
