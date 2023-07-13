import React, { useRef, useState } from "react";

const Search = (props) => {
  return (
    <div className="col-md-6">
      <div className="col-md-6 mx-auto">
        <div className="small fw-light"></div>
        <div className="input-group">
          <input
            className="form-control border rounded-pill"
            type="search"
            id="example-search-input"
            placeholder="Search by Name"
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
