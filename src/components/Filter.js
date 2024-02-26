// src/components/Filter.js
import React from 'react';

const Filter = ({ categories, onSelectCategory }) => {
    return (
      <div>
        <h2>Filter by Category</h2>
        <select onChange={(e) => onSelectCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    );
  };

export default Filter;
