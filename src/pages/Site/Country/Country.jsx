import React, { useEffect, useState } from "react";
import Styles from "./Country.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../../../components/Search/Search";

const Country = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className={`${Styles.Countryapp__country__section} container`}>
      <div className={`${Styles.app__country} row`}>
        <Search search={search} setSearch={setSearch} />

        {data.map((country, index) => {
          if (
            country.flags.png === undefined ||
            !Array.isArray(country.capital) ||
            !country.name.common.toUpperCase().includes(search.toUpperCase())
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
