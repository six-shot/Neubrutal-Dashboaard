"use client"
import React, { useState } from "react";

const Team = () => {
  const initialArray = [
    { id: 1, name: "", description: "" },
    { id: 2, name: "", description: "" },
    { id: 3, name: "", description: "" },
  ];

  const [array, setArray] = useState(initialArray);
  const [updatedArray, setUpdatedArray] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newArray = array.map((obj) => ({ ...obj, [name]: value }));
    setArray(newArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdatedArray(array);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={array[0].name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          description:
          <input
            type="text"
            name="description"
            value={array[0].description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {updatedArray && (
        <div>
          <h2>Updated Values:</h2>
          {updatedArray.map((obj) => (
            <div key={obj.id}>
              <p>Name: {obj.name}</p>
              <p>description: {obj.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
