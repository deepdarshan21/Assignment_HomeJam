import { AppProvider } from "./Store/AppContext";
import Home from "./Layouts/Homepage/Home";

function App() {
    return (
        <AppProvider>
            <div className="App">
                <p>Hello HomeJam</p>
                <Home />
            </div>
        </AppProvider>
    );
}

export default App;
