import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import filterReducer from "./reducers/filterReducer";
import { configureStore } from "@reduxjs/toolkit";
import noteService from "./services/notes";
import noteReducer, { setNotes } from "./reducers/noteReducer";
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});
noteService.getAll().then((notes) =>
  notes.forEach((note) => {
    store.dispatch(setNotes(notes));
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
