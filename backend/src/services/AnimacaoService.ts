import axios from "axios";
import { key } from "../keys";
import {pagina} from "../routes"

class AnimacaoService{
    getAnimacoes = axios(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=16&vote_count.gte=90&sort_by=popularity.asc&language=pt-BR&page=${pagina}`)
    .then((res) => {
        const data = res.data.results;
        return data;
    })
    .catch(error => {
        console.error(error.toJSON());
    });
}
export default AnimacaoService;