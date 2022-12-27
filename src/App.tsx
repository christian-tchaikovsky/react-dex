import React from "react";
import styles from "./App.module.sass";
import { Button } from "@/components/UI/Button";

function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <Button>Test</Button>
        </div>
    );
}

export default App;
