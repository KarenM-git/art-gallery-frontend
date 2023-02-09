import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Artwork from "../Artwork/Artwork";
import Search from "../Search/Search";
import ExplorerPage from "../ExplorerPage/ExplorerPage";
import Footer from "../Footer/Footer";
import * as api from "../../utils/ArticApi";

function App() {
  const [cards, setCards] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [type, setType] = React.useState("");
  const [exploreCards, setExploreCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getArtworkInfo(pageNumber)
      .then((res) => {
        setCards(res.data, ...cards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleOnExplore(evt) {
    setType(evt.target.id);
  }
  return (
      <div className='page'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Main handleOnExplore={handleOnExplore} />}
          />
          <Route
            path='/artwork'
            element={
              <Artwork
                cards={cards}
                setCards={setCards}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
              />
            }
          />
          <Route
            path='/search'
            element={<Search cards={cards} setCards={setCards} />}
          />
          <Route
            path='/explorer'
            element={
              <ExplorerPage
                exploreCards={exploreCards}
                setExploreCards={setExploreCards}
                type={type}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
