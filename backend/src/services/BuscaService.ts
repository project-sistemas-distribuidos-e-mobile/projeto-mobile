import axios from "axios";
import { key } from "../keys";
import { id } from "../routes";
import {categoria} from "../routes";

class BuscaService{
    get = axios.get(`https://api.themoviedb.org/3/${categoria}/${id}?api_key=${key}&language=pt-BR`)
    .then(response => {
        return response.data;    
    })
    .catch(error => console.log(error));
}

export default BuscaService;