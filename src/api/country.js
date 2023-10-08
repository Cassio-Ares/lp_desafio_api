//https://restcountries.com/v3.1/all
//https://restcountries.com/v3.1/name/{name}
//https://restcountries.com/v3.1/name/{name}?fullText=true

import axios from "axios";

const url = "https://restcountries.com/v3.1/";

const accApi = (path) => `${url}${path}`;

export class Countries {
  static getCountries() {
    return axios(accApi("all"));
  };

  static searchCountry(name){
    return axios (accApi(`name/${name}?fullText=true`))
  }

}
