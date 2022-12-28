import React, { useState } from "react";
import { Input } from "@/components/UI/Input";
import styles from "./App.module.sass";

function App(): JSX.Element {
    const [value, setValue] = useState("");

    return (
        <div className={styles.app}>
            <Input type="number" error="Required" label="Login" onChange={e => setValue(e.target.value)} value={value}/>
        </div>
    );
}

export default App;
