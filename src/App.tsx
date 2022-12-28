import React from "react";
import { Typography } from "@/components/UI/Typography";
import styles from "./App.module.sass";

function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <Typography>
                Typography
            </Typography>
        </div>
    );
}

export default App;
