import mainImage from "../../images/mainImg.avif";
import About from "../About/About";
import Explorer from "../Explorer/Explorer";
import { Link } from "react-router-dom";

function Main({ handleOnExplore }) {
  return (
    <main className='main'>
      <section className='banner'>
        <div className='banner__img-wrapper'>
          <div className='banner__content'>
            <h1 className='banner__content-title'> Las Mujeres En El Arte</h1>
            <p className='banner__content-txt'>
              encuentra miles de obras de arte hechas e inpiradas por mujeres
            </p>
            <Link className='banner__bttn' to='/search'>
              {" "}
              Buscar{" "}
            </Link>
          </div>
          <div className='banner__img-overlay'></div>
          <img
            className='banner__img'
            src={mainImage}
            alt='Retrato de Berthe Morisot con un ramo de violetas, pintado por Edouard
          Manet'
          />
        </div>
        <span className='banner__img-footer'>
          Retrato de Berthe Morisot con un ramo de violetas, pintado por Edouard
          Manet
        </span>
      </section>
      <Explorer onExplore={handleOnExplore} />
      <About />
    </main>
  );
}

export default Main;
