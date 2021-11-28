import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../core/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (preloadedState: any) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );

const store = configureStore({});

export default store;
