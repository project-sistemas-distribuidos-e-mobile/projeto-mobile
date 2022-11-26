import { Router } from "express";
import FilmesController from './controllers/FilmesController';
import AnimacoesController from "./controllers/AnimacoesController";
import SeriesController from "./controllers/SeriesController";
import JogosControllers from "./controllers/JogosControllers";

const routes = Router();
let busca: string = 'safe-guard';
let id: string = '9999';
let categoria: string = '';
let pagina : string = '1';

routes.post('/home/:page', (req, res) => {
    pagina = req.params['page'];
})

//Rotas da home
routes.get('/filmes', FilmesController.buscarFilmes);
routes.get('/series', SeriesController.buscarSeries);
routes.get('/animacoes', AnimacoesController.buscarAnimacoes);
routes.get('/jogos', JogosControllers.buscarJogos);

//Rotas para pequisa por nome
routes.post('/pesquisa/:nome', (req, res) => {
    busca =  req.params['nome'];
    busca = busca.replaceAll('%20', '+');
    res.status(200).send({"status": "received"});
});
routes.get('/res/filme', FilmesController.buscarFilmePorNome);
routes.get('/res/serie', SeriesController.buscarSeriePorNome);
routes.get('/res/jogo', JogosControllers.buscarJogoPorNome);

//Rotas para conteudo especifico
routes.post('/titulo/:categoria/:id', (req, res) => {
    categoria = req.params['categoria'];
    id = req.params['id'];
    res.status(200).send({"status": "received"});
});
routes.get('/filme', FilmesController.buscarFilmePorId); 
routes.get('/serie', SeriesController.buscarSeriePorId);
routes.get('/animacao', SeriesController.buscarSeriePorId);
routes.get('/jogo', JogosControllers.buscarJogoPorId);
export {routes, busca, id, categoria, pagina};