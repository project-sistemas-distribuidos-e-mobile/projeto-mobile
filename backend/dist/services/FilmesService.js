"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const key = 'fad67443ef73cd4afda062c648aece81';
class FilmeService {
    getPopularMovies() {
        axios_1.default.get('https://api.themoviedb.org/3/movie/550?api_key=fad67443ef73cd4afda062c648aece81')
            .then((response) => {
            console.log(response.data);
            return response.data;
        });
    }
}
exports.default = FilmeService;
