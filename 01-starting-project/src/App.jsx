import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS as componentsData} from "./data.js";
import {useState} from "react";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


function Header() {

    const description = useState(
        () => reactDescriptions[genRandomInt(2)]
    );
    // const description = reactDescriptions[genRandomInt(2)]

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1><h1>React Essentials</h1></h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}


function CoreConcepts({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            {...componentsData[0]}
                        />
                        <CoreConcepts
                            {...componentsData[1]}
                        />
                        <CoreConcepts
                            {...componentsData[2]}
                        />
                        <CoreConcepts
                            title={componentsData[3].title}
                            description={componentsData[3].description}
                            image={componentsData[3].image}
                        />
                    </ul>
                </section>

            </main>
        </div>
    );
}

export default App;
