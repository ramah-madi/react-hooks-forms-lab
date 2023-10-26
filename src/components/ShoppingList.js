import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchSelectedCategory, setSearchSelectedCategory] = useState("")
  const [addItem, setAddItem] = useState("")
  const [addCategory, setAddCategory] = useState("Produce")
  const [addItemsToList, setAddItemsToList] = useState([...items])

  function handleAddItemsToList(itemsArray){
     setAddItemsToList(() => [...addItemsToList, itemsArray])
     setAddItem("");
     setAddCategory("Produce");
  }
  function handleAddItem(event){
    setAddItem(event.target.value)
  }

  function handleAddCategory(event){
    setAddCategory(event.target.value)
  }
  
  function handleCategoryChange(event) {
    setSelectedCategory(() => event.target.value);
  }

  function handleSearchCategory(event){
     setSearchSelectedCategory(() => event.target.value)
  }
  

  let itemsToDisplay = addItemsToList.filter((item) => {
    
    if (selectedCategory === "All") return true;
    else 
    return item.category === selectedCategory;
  });

  if(searchSelectedCategory !== ""){
    itemsToDisplay = addItemsToList.filter((item) => {
    
    
      return item.name.toLowerCase().includes(searchSelectedCategory.toLowerCase())
  }) }
  
 
  return (
    <div className="ShoppingList">
      <ItemForm addItem={addItem} addCategory={addCategory} onAddCategory={handleAddCategory} onAddItem={handleAddItem} onItemFormSubmit={handleAddItemsToList}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchCategory} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
