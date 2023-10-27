import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleChange, addItemValue, addCategoryValue,onItemFormSubmit}) {
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: addItemValue,
    category: addCategoryValue,
  };

  return (
    <form className="NewItem"  onSubmit={(e) => {e.preventDefault();
       onItemFormSubmit(newItem);
      }}>
      <label>
        Name:
        <input type="text" name="addItem"  onChange={handleChange} value={addItemValue}/>
      </label>

      <label>
        Category:
        <select name="addCategory"  onChange={handleChange} value={addCategoryValue}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
