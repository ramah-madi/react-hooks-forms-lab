import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [formData, setFormData] = useState({
    filterByCategory: "All",
    searchByName: "",
    addItem: "",
    addCategory: "Produce"
  })
  const [addItemsToList, setAddItemsToList] = useState([...items])
  
  function handleSubmit(itemsArray){
     setAddItemsToList(() => [...addItemsToList, itemsArray])
  
  }

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value

    setFormData({
        ...formData,
         [name]: value,
        })
  }

  let itemsToDisplay = addItemsToList.filter((item) => {
    
    if (formData.filterByCategory === "All") return true;
    else 
    return item.category === formData.filterByCategory;
  });

  if(formData.searchByName !== ""){
    itemsToDisplay = addItemsToList.filter((item) => {
    
    
      return item.name.toLowerCase().includes(formData.searchByName.toLowerCase())
  }) }
  
 
  return (
    <div className="ShoppingList">
      <ItemForm handleChange={handleChange} addItemValue={formData.addItem} addCategoryValue={formData.addCategory} onItemFormSubmit={handleSubmit}/>
      <Filter onSearchChange={handleChange} search={formData.searchByName} categoryValue={formData.filterByCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
