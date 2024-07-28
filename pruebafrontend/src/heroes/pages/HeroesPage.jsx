import { useNavigate, useParams } from "react-router-dom";
import { GetHeroesById } from "../../helpers/GetHeroesById";

export const HeroesPage = () => {
  const { id } = useParams();
  const hero = GetHeroesById(id);
  const url = useNavigate();

  const handleReturn = () => {
    if (hero.tipo === "anime") {
      url("/anime");
    } else {
      url("/comic");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        {hero ? (
          <div className="card mt-5" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src={`/assets/heroes/${id}.jpg`}
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">{hero.nombre}</h4>
              <p className="card-text">{hero.origen}</p>
              <p className="card-text">{hero.descripcion}</p>
              <div className="button-container">
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleReturn}
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        ) : (
            <>
            
            <h1>El Héroe no existe</h1>
            </>
        
        )}
      </div>
    </>
  );
};
