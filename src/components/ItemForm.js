import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };
  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newItem);
    props.onItemFormSubmit(newItem);
  };

  return (
    <form className='NewItem' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' name='Name' onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name='category' onChange={handleCategoryChange}>
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </label>

      <button type='submit'>Add to List</button>
    </form>
  );
}

export default ItemForm;
