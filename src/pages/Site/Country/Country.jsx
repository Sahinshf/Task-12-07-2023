import React, { useEffect, useState } from "react";
import Styles from "./Country.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../../../components/Search/Search";
import SelectCountry from "../../../components/SelectCountry/SelectCountry";

const Country = () => {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className={`${Styles.Countryapp__country__section} container`}>
      <div className={`${Styles.app__country} row`}>
        <div
          className="align-items-baseline justify-content-between"
          style={{ display: "flex", marginTop: "20px" }}
        >
          <Search search={search} setSearch={setSearch} />
          <SelectCountry select={select} setSelect={setSelect} />
        </div>

        {data.map((country, index) => {
          if (
            country.flags.png === undefined ||
            !Array.isArray(country.capital) ||
            !country.name.common.toUpperCase().includes(search.toUpperCase()) ||
            !country.region.toUpperCase().includes(select.toUpperCase())
          ) {
            return null;
          }

          return (
            <div
              key={index}
              className={`${Styles.app__country__item} card col-md-3`}
              style={{ width: "18rem" }}
            >
              <Link
                className={Styles.app__country__item__link}
                to={`detail/${country.name.common}`}
              >
                <div>
                  <div className={Styles.app__country__item__image}>
                    <img
                      className="card-img-top"
                      src={country.flags.png}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <div className={Styles.app__country__item__information}>
                      <h6>Population :</h6> <p>{country.population}</p>
                    </div>
                    <div className={Styles.app__country__item__information}>
                      <h6>Region : </h6> <p>{country.region}</p>
                    </div>
                    <div className={Styles.app__country__item__information}>
                      <h6>Capital :</h6> <p>{country.capital[0]}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
