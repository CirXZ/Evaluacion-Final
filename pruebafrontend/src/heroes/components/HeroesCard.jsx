import { NavLink } from "react-router-dom";

export const HeroesCard = ({id,nombre,tipo,origen,descripcion}) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;
    return (
      <div className="card p-1" style={{ width: '400px' }}>
        <img className="card-img-top" src={imgSrc} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title"> {nombre}</h4>
          <p className="card-text">Origen: {origen}</p>
          <NavLink  data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" to={`/hero/${id}`} type="submit">Saber mas</NavLink>
        
        </div>
      </div>
  );
};
