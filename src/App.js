import { AppProvider } from "./Store/AppContext";
import Home from "./Pages/Home/Home";

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
