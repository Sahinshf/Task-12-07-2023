import React, { useRef } from "react";

const SelectCountry = (props) => {
  const selectRef = useRef("");

  function handleSelectedRegion() {
    props.setSelect(selectRef.current.value);
  }

  return (
    <select
      className="form-select col-md-6"
      aria-label="Default select example"
      ref={selectRef}
      onClick={handleSelectedRegion}
      style={{ width: "50%" }}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectCountry;
