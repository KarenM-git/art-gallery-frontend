
function SearchBar({ query, handleChange }) {
  function onSubmit(evt) {
    evt.preventDefault();
  }

    return (
      <div className='searchbar'>
        <form className='searchbar__form' onSubmit={onSubmit}>
                <input className='searchbar__input' value={query} onChange={handleChange} placeholder='   Buscar'></input>
        </form>
      </div>
    );
}

export default SearchBar;
