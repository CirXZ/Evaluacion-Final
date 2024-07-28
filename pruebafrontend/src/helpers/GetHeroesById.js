import { heroes } from "../data/Heroes"

export const GetHeroesById = (id) =>{
    return heroes.find((hero) => hero.id === id);
}