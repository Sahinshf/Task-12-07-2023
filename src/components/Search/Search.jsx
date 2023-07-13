import React, { useRef, useState } from "react";

const Search = (props) => {
  const inputValue = useRef("");

  return (
    <div className="row mt-5">
      <div className="col-md-5 mx-auto">
        <div className="small fw-light"></div>
        <div className="input-group">
          <input
            className="form-control border rounded-pill"
            type="search"
            id="example-search-input"
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
