import React, { useEffect, useState } from "react";
import { Countries } from "../../api/country";
import Card from "../Cards/Card";

import "./SearchFlags.css";

const SearchFlags = () => {
  const [countryFlags, setCountryFlags] = useState([]);

  async function getSearchFlags() {
    const { data } = await Countries.getCountries();

    setCountryFlags(data);
  }

  useEffect(() => {
    getSearchFlags();
  }, []);

  useEffect(() => {
    console.log(countryFlags);
  });

  return (
    <main className="flags">
      <div className="flags_title">
        <h1>Conheça novos paises clicando nas bandeiras</h1>
      </div>

      <section className="flags_section">
        {countryFlags.map((country) => (
          <div key={country.tld}>
            <Card data={country} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default SearchFlags;
