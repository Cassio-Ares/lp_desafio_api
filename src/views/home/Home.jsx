import { useEffect, useState } from "react";
import { Countries } from "../../api/country";
import { Link } from "react-router-dom";
import "./home.css";
import SearchFlags from "../../components/Search_Flags/SearchFlags";

const Home = () => {
  const [country, setCountry] = useState([]);
  const [nameCountry, setNameCountry] = useState("");

  /**
   * muda o parametro para acessar uma busca especifica na API
   * @param {nameCountry} nameCountry
   */
  async function searchCountry(nameCountry) {
    const { data } = await Countries.searchCountry(nameCountry);

    setCountry(data);
  }

  useEffect(() => {
    searchCountry(nameCountry);
  }, [nameCountry]);

  useEffect(() => {
      console.log(country);
  });

  /**
   * pega os dados do input e manda para NameCountry
   * @param {event} e
   */
  function handle(e) {
    e.preventDefault();

    const value = e.target[0].value;
    setNameCountry(value);
  }

  return (
    <main className="home">
      <h1 className="home_title">Qual pais vc gostaria de conhecer?</h1>

       <form onSubmit={handle} className="home_form">
        <input type="text" className="home_input" />
        <Link to={`/details/${country}`}>
        
          <button className="home_btn_search">Buscar</button>
         </Link>
      </form> 
      <SearchFlags />
    </main>
  );
};

export default Home;
