import React, { useState, useEffect } from "react";

export const NewToDoForm: React.FC<{
  addToDo: Function;
  updateToDo: Function;
  id: number;
  description: string;
  assigned: string;
  isEdit: Boolean;
}> = (props) => {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    if (props.isEdit === true && props.id !== null) {
      console.log("onload id present");
      // Set state values from props when the component is loaded
      setDescription(props.description || ""); // Default to an empty string if props.description is undefined
      setAssigned(props.assigned || ""); // Default to an empty string if props.assigned is undefined
      setId(props.id || 0); // Default to an empty string if props.id is undefined
    }
  }, [props.description, props.assigned, props.id, props.isEdit]);

  const submitToDo = () => {
    if (id !== 0) {
      console.log(`id: ${id}`);
      updateToDo();
    } else {
      if (description !== "" && assigned !== "") {
        props.addToDo(description, assigned);
        setAssigned("");
        setDescription("");
      }
    }
  };

  const updateToDo = () => {
    if (id !== null && description !== "" && assigned !== "") {
      props.updateToDo(id, description, assigned);
      setAssigned("");
      setDescription("");
      setId(0);
    }

    console.log(id, assigned, description);
  };

  return (
    <div className="mt-5">
      <form>
        {props.isEdit && (
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              disabled
              onChange={(e) => setId(parseInt(e.target.value, 10))}
              value={id}
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Assigned
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={submitToDo}>
          {props.isEdit ? "Update ToDo" : "Add new ToDO"}
        </button>
      </form>
    </div>
  );
};

export default NewToDoForm;
