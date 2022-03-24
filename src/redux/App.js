import React, { useReducer, useState } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="wrapper">
    <fieldset>
      <h1>Employee Details</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="Name" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Tech:
          <select name="Tech" onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="Angular">Angular</option>
            <option value="Java">Java</option>
            <option value="React">React</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
      </fieldset>
      <br />
        <br />

      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
