import React from "react";
import Newnote from "./components/Newnote";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";

const App = () => {
  return (
    <div>
      <Newnote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
