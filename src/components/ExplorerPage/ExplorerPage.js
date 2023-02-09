import React from "react";
import Card from "../Card/Card";
import * as api from "../../utils/ArticApi";

function ExplorerPage({ type, setExploreCards, exploreCards }) {
  React.useEffect(() => {
    api
      .types(type)
      .then((res) => {
        setExploreCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);

  return (
    <div>
      <h2> {type}</h2>
      <section className='cards'>
        {exploreCards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </section>
    </div>
  );
}

export default ExplorerPage;
