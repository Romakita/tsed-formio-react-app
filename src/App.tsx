import React from "react";
import {FormBuilder} from "@tsed/react-formio";

function App() {
    // @ts-ignore
    const div = <>
        <div className="App">
            <FormBuilder display={'form'} components={[]}/>
        </div>
    </>;
    return div;
}

export default App;
