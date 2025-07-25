function Header() {
    const courseTitle = "React Essentials";
    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
            <h1><h1>{courseTitle}</h1></h1>
            <p>
                Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

function App() {
    return (
        <div>
            <Header/>
            <main>
                <h2>Time to get started!</h2>

            </main>
        </div>
    );
}

export default App;
