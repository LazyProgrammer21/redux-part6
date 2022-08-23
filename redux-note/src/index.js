import React from "react";
import ReactDOM from "react-dom/client";
import noteReducer from "./reducers/noteReducer";
import App from "./App";
import { Provider } from "react-redux";
import filterReducer from "./reducers/filterReducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
