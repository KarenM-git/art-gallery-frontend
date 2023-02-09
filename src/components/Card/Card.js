import React from "react";

function Card({ card }) {

  return (
    <div className='card'>
      <img
        className='card__img'
        src={`https://www.artic.edu/iiif/2/${card.image_id}/full/843,/0/default.jpg`}
        alt={card.title}
      />
      <div className='card__info'>
        <p className='card__txt-container'>
          <span className='card__txt-label'>Título </span>
          <span className='card__txt'>{card.title}</span>
        </p>
        <p className='card__txt-container'>
          <span className='card__txt-label'>Artista </span>
          <span className='card__txt'>
            {card.artist_display || "desconocido"}
          </span>
        </p>
        <p className='card__txt-container'>
          <span className='card__txt-label'>Fecha </span>
          <span className='card__txt'>{card.date_display}</span>
        </p>
        <p className='card__txt-container'>
          <span className='card__txt-label'>Medio </span>
          <span className='card__txt'>{card.medium_display}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
