import { GetHeroes } from "../../helpers/GetHeroes"
import { HeroesCard } from "./HeroesCard";

export const HeroesList = ({tipo}) => {
  const heroes = GetHeroes(tipo);
  return (
    <>
      <h1 className="p-5">Lista de Heroes</h1>
      <div className="col-md-1 offset-md-2 ">
      {
          heroes.map(aux => (
            <HeroesCard key={aux.id}{...aux}>
            </HeroesCard>
          ))
        }
      </div>
    </>
  )
}
