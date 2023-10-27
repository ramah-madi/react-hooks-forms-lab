import React from "react";

function Filter({ onSearchChange, categoryValue,search}) {
  return (
    <div className="Filter">
      <input type="text" name="searchByName" placeholder="Search..." onChange={onSearchChange} value={search}/>
      <select name="filterByCategory" onChange={onSearchChange} value={categoryValue}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
