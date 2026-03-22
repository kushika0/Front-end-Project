import React from "react";

function Filter({ category, setCategory, categories }) {
  return (
    <div className="mb-3">

      <select
        className="form-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >

        <option value="">
          All Categories
        </option>

        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}

      </select>

    </div>
  );
}

export default Filter;