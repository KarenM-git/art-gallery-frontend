import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import * as api from "../../utils/ArticApi";

function Search() {
  const [results, setResults] = React.useState([]);
  const [query, setQuery] = React.useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    console.log(e.target.value);
  }

  React.useEffect(() => {
    if (!query) {
      setResults(null);
      return;
    }
    if (query.length < 3) {
      return;
    }
    api
      .getSearch(query)
      .then((res) => {
        if (res.data) {
          setResults(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  if (!results) {
    return (
      <div className='search'>
        <span className='search__txt'>Encuentra miles de obras de arte</span>
        <span className='search__txt'> Inicia una busqueda </span>
        <SearchBar query={query} handleChange={handleChange} />
      </div>
    );
  }

  return (
    <div className='search'>
      <span className='search__txt'>Encuentra miles de obras de arte</span>
      <span className='search__txt'> Inicia una busqueda </span>
      <SearchBar query={query} handleChange={handleChange} />
      {results.length === 0 ? (
        <span className='search__txt'> No se encontraron resultados </span>
      ) : (
        <section className='cards'>
          {results.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </section>
      )}
    </div>
  );
}

export default Search;
