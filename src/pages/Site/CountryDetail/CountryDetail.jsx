import React, { useEffect, useState } from "react";
import Styles from "./CountryDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);
      });
  }, [name]);

  return (
    <div>
      {country.flags === undefined ? (
        <div></div>
      ) : (
        <div className={`${Styles.app__countryDetail__section}  container`}>
          {console.log(country.currencies)}
          <div className=" justify-content-between align-items-center row">
            <div className={`${Styles.app__countryDetail__image} col-md-6`}>
              <img src={country.flags.png} alt="Country Flag" />
            </div>
            <div
              className={`${Styles.app__countryDetail__description} col-md-6`}
            >
              <h2>{country.name.common}</h2>
              <div className={Styles.app__countryDetail__information}>
                <div>
                  <div>
                    <h6>Population : </h6>
                    <p>{country.population}</p>
                  </div>
                  <div>
                    <h6>Regio : </h6>
                    <p>{country.region}</p>
                  </div>
                  <div>
                    <h6>Sub Region : </h6>
                    <p>{country.subregion}</p>
                  </div>
                  <div>
                    <h6>Capital : </h6>
                    <p>{country.capital[0]}</p>
                  </div>
                </div>

                <div>
                  <div>
                    <h6>Top Level Domain : </h6>
                    <p>{country.tld}</p>
                  </div>
                  <div>
                    <h6>Languages : </h6>
                    <p>{Object.values(country.languages).join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
