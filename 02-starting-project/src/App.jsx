import {Fragment} from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples";

function App() {
    console.log('APP COMPONENT EXECUTING');

    return (
        <>
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App;
