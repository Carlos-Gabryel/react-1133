import React, { useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={handleAgeChange} />
        </label>
      </form>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
