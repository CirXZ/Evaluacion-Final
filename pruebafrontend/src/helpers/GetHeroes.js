import { heroes } from "../data/Heroes";

export const GetHeroes = (tipo) =>{
    const aux = ['comic', "anime"];
    if (!aux.includes(tipo)){
        throw new Error(`El tipo no se encuentra: "${tipo}"`);
    }
    return heroes.filter(hero => hero.tipo === tipo)
}
