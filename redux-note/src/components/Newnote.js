import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const Newnote = () => {
  const dispatch = useDispatch();
  const addNote = (event) => {
    event.preventDefault();

    const content = event.target.note.value;
    if (content === "") {
      alert("Notes cannot be Empty");
    } else {
      event.target.note.value = "";
      dispatch(createNote(content));
    }
  };
  return (
    <>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default Newnote;
