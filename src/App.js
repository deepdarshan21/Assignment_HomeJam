import { AppProvider } from "./Store/AppContext";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <AppProvider>
            <Home />
        </AppProvider>
    );
}

export default App;
