import axios from "axios";
import { clientID } from "../keys";
import { token } from "../keys";
import { id } from "../routes";
import {busca} from "../routes";

class JogoService{
    //Busca os jogos mais populares, com nota acima de 90 e data de lançamento superior a 2018 ou 2020 
    //não sei ao certo :P
    getJogos = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: `fields id, name, first_release_date, summary, language_supports.language.name, rating, genres.name, cover.image_id, artworks.image_id, screenshots.image_id, involved_companies.company.name, platforms.name; where rating > ${Math.floor(Math.random() * 101)} & first_release_date > 1514772000;limit 20; sort rating asc;`
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error));
    
    //Busca os jogos por nome
    getJogoPorNome = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: `fields id, name, first_release_date, summary, language_supports.language.name, rating, genres.name, cover.image_id, artworks.image_id, involved_companies.company.name, platforms.name; search "${busca}"; limit 10;`
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error));  

    //Busca os jogos por nome/titulo
    getJogoPorID = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: `fields name, summary, first_release_date, rating, genres.name, involved_companies.company.name, cover.image_id, artworks.image_id, platforms.name, websites.url; where id = ${id};`
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error));
}
export default JogoService;