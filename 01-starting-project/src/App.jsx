import {CORE_CONCEPTS as componentsData} from "./data.js";
import {Header} from "./components/Header";
import {CoreConcepts} from "./components/CoreConcept";
import TabButton from "./components/TabButton"
import {useState} from "react";
import {EXAMPLES} from "./data"


function App() {

    const [selectedTab, setSelectedTab] = useState(null);
    const handleTabSelect = (tabName) => {
        setSelectedTab(tabName.toLowerCase());
        console.log(`Selected tab: ${tabName}`);
    };

    let tabContent = <p>Please select a topic</p>
    if (selectedTab) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                        <code>
                            {EXAMPLES[selectedTab].code}
                        </code>
                    </pre>
            </div>
        );
    }

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTab === "components"}
                                   onSelect={handleTabSelect}>Components</TabButton>
                        <TabButton isSelected={selectedTab === "jsx"} onSelect={handleTabSelect}>JSX</TabButton>
                        <TabButton isSelected={selectedTab === "props"} onSelect={handleTabSelect}>Props</TabButton>
                        <TabButton isSelected={selectedTab === "state"} onSelect={handleTabSelect}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
