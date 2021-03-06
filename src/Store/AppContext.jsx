import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import store from "./Store";

// Create context
const AppContext = createContext(store);

// Provider component
const AppProvider = (props) => {
    const [state] = useReducer(AppReducer, store);

    // Actions

    return (
        <AppContext.Provider
            value={{
                reviews: state.reviews,
                shows: state.shows,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
