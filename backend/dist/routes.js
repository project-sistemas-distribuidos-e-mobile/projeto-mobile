"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const FilmesController_1 = __importDefault(require("./controllers/FilmesController"));
routes.get('/filmes', (req, res) => {
    res.send("Rota de filmes");
});
routes.get('/filmes3', FilmesController_1.default.popularMovies);
exports.default = routes;
