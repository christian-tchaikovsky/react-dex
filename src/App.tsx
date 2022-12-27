import React from "react";
import { Button } from "@/components/UI/Button";
import styles from "./App.module.sass";

function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <Button>Sign In</Button>
        </div>
    );
}

export default App;
