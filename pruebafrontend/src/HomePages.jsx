import { heroes } from "./data/Heroes";

export const HomePages = () => {
  return (
    <div className="container mt-5 bg-secondary" >
      <div className="row">
        <div className="col-sm-4">
          <h2>Presentacion Pagina</h2>
          <p className="bg-primary">
            En esta pagina se mostraran personajes iconicos del mundo de los animes y comics
          </p>
          
        </div>
        <div className="col-sm-8">
          <h1>Ejemplo</h1>

            <ul>
            <ul className="bg-success">
            {
            heroes.map(aux => (
            <li className="text-white" key={aux.id}>
              {aux.nombre}
            </li>
            ))
            }
            </ul>
            </ul>
        
        </div>
      </div>
    </div>
  );
};
