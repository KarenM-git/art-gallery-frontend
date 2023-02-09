import React from "react";
import escultura from "../../images/escultura.jpg";
import pintura from "../../images/pintura.jpg";
import fotografia from "../../images/fotografia.jpg";
import { Link } from "react-router-dom";

function Explorer({ onExplore }) {
  return (
    <section className='explorer'>
      <h3 className='explorer__title'>Explorar</h3>
      <div className='explorer__container'>
        <Link className='explorer__link' to='/explorer'>
          <div
            className='explore__item-overlay'
            id='sculpture'
            onClick={onExplore}
          >
            <span className='explorer__item-name'>Escultura </span>
          </div>
          <div className='explorer__item'>
            <img className='explorer__item-img' src={escultura} alt='explorar esculturas'></img>
          </div>
        </Link>
        <Link className='explorer__link' to='/explorer'>
          <div
            className='explore__item-overlay'
            id='painting'
            onClick={onExplore}
          >
            <span className='explorer__item-name'>Pintura</span>
          </div>
          <div className='explorer__item'>
            <img className='explorer__item-img' src={pintura} alt='explorar pinturas'></img>
          </div>
        </Link>
        <Link className='explorer__link' to='/explorer'>
          <div
            className='explore__item-overlay'
            id='photograph'
            onClick={onExplore}
          >
            <span className='explorer__item-name'>Fotografía</span>
          </div>
          <div className='explorer__item'>
            <img className='explorer__item-img' src={fotografia} alt='explorar fotografias'></img>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Explorer;
