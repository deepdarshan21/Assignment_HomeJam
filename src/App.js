import { AppProvider } from "./Context/AppContext";
import Home from "./Layouts/Home/Home";

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
