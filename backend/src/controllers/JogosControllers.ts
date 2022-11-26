import { Request, Response } from "express";
import JogoService from "../services/JogoService";
import { Jogo } from "../models/Jogo";
import { TituloJogo } from "../models/TituloJogo";

export default{
    //Retorna um array de 20 jogos conforme o Modelo
    async buscarJogos(req: Request, res: Response){
        let array_de_jogos: {}[] = [];
        const jogos_model = new JogoService();
        const response = await jogos_model.getJogos;
        try{
            response.forEach(element => {
                const jogo = new Jogo();
                jogo.id = element.id;
                jogo.nome = element.name;
                jogo.descricao = element.summary;
                if(element.cover != undefined){
                    jogo.imagem += element.cover['image_id'] + '.jpg';  
                }else if(element.artworks != undefined){
                    jogo.imagem += element.artworks['image_id'] + '.jpg';
                }else if(element.screenshots != undefined){
                    jogo.imagem += element.screenshots['image_id'] + '.jpg';
                }
                if(element.artworks != undefined){
                    jogo.background_imagem += element.artworks[0]['image_id'] + '.jpg';
                } else if(element.screenshots != undefined){
                    jogo.background_imagem += element.screenshots[0]['image_id'] + '.jpg';
                } else{
                    jogo.background_imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
                }
                array_de_jogos.push(jogo);
            });
        }
        catch (error){
            console.log(error);
        }

        return res.json(array_de_jogos);
    },

    //Retorna um array de 5 jogos buscados pelo nome conforme o Modelo
    async buscarJogoPorNome(req: Request, res: Response){
        let array_de_jogos: {}[] = [];
        const jogos = new JogoService();
        const response = await jogos.getJogoPorNome;
        response.forEach(element => {
            const jogo = new Jogo();
            jogo.id = element.id;
            jogo.nome = element.name;
            jogo.descricao = element.summary;
            if(element.cover != undefined){
                jogo.imagem += element.cover['image_id'] + '.jpg';  
            }else if(element.artworks != undefined){
                jogo.imagem += element.artworks['image_id'] + '.jpg';
            }else if(element.screenshots != undefined){
                jogo.imagem += element.screenshots['image_id'] + '.jpg';
            }
            array_de_jogos.push(jogo);
        });
        return res.json(array_de_jogos);
    },

    //Retorna um jogo especifico buscados pelo ID conforme o Modelo
    async buscarJogoPorId(req: Request, res: Response){
        const jogo = new TituloJogo();
        const fetch = new JogoService();
        const response = await fetch.getJogoPorID;
        try{
            response.forEach(element => {               
                jogo.id = element.id;
                jogo.nome = element.name;
                jogo.descricao = element.summary;
                const date = new Date(element.first_release_date * 1000);
                const release = date.getDate() + '-' + (date.getMonth() == 0 ? date.getMonth() + 1 :  date.getMonth()) + '-' + date.getFullYear();
                jogo.data_lancamento = release;
                jogo.nota = element.rating != undefined ? element.rating.toFixed(2) : 0;
                if(element.genres.length >= 1){
                    element.genres.forEach(genre =>{
                        jogo.generos.push(genre['name']);
                    })
                }
                if(element.involved_companies.length >= 1){
                    element.involved_companies.forEach(produtora =>{
                        jogo.produtoras.push(produtora['company']['name']);
                    })
                }
                if(element.platforms.length >= 1){
                    element.platforms.forEach(plataforma =>{
                        jogo.plataformas.push(plataforma['name']);
                    })
                }
                if(element.cover != undefined){
                    jogo.poster += element.cover['image_id'] + '.jpg';  
                }else if(element.artworks != undefined){
                    jogo.poster += element.artworks[0]['image_id'] + '.jpg';   
                }
                if(element.websites.length >= 1){
                    element.websites.forEach(website => {
                        if(website['url'].includes('store')){
                            jogo.website.push(website['url']); 
                        }
                    });  
                }                
            })
        } 
        catch (error){
            console.log(error);
        }
        return res.json(jogo);
    }
}