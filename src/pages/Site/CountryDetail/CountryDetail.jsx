import React, { useEffect, useState } from "react";
import Styles from "./CountryDetail.module.css";
import { useParams } from "react-router-dom";
import { act } from "react-dom/test-utils";
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
  }, []);

  //className={`${}`}

  return (
    {country.flags === undefined ? <div></div> :
    <div className={`${Styles.app__countryDetail__section} container`}>
    {console.log(country.flags)}
    <div className={`${Styles.app__countryDetail__image} col-md-6`}>
      <img src={country.flags.png}  />
    </div>
    <div className={`${Styles.app__countryDetail__description} col-md-6`}>
      <h2>{country.name.common}</h2>
      <div className={Styles.app__countryDetail__information}>
        <div>
          <div>
            <h6>Native Name</h6>
            <p></p>
          </div>
          <div>
            <h6>Population</h6>
            <p></p>
          </div>
          <div>
            <h6>Region</h6>
            <p></p>
          </div>
          <div>
            <h6>Sub Region</h6>
            <p></p>
          </div>
          <div>
            <h6>Capital</h6>
            <p></p>
          </div>
        </div>

        <div>
          <div>
            <h6>Top Level Domain</h6>
            <p></p>
          </div>
          <div>
            <h6>Currencies</h6>
            <p></p>
          </div>
          <div>
            <h6>Languages</h6>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  }


    
  );
};

export default CountryDetail;
