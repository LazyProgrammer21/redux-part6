import React from "react";
import Newnote from "./components/Newnote";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { initializeNotes } from "./reducers/noteReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);
  return (
    <div>
      <Newnote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
