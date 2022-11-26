import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { TituloJogo } from 'src/models/TituloJogo';
import { AuthService } from '../login/auth.service';
import { FavService } from '../titulo/fav.service';

@Component({
  selector: 'app-titulo-jogo',
  templateUrl: './titulo-jogo.component.html',
  styleUrls: ['./titulo-jogo.component.css']
})
export class TituloJogoComponent implements OnInit {
  jogo: TituloJogo = new TituloJogo();
  favorito = false;
  usuario$ = this.authservice.usuarioAtual$;

  favoritar(id: any){
    this.favorito = !this.favorito;
    this.favService.post(id, {
      id: 0,
      nome: this.jogo.nome,
      poster: this.jogo.poster,
    });
  }

  constructor(private authservice: AuthService, private favService: FavService) { }

  ngOnInit(): void {
    api.get('/jogo')
      .then(response => {
        this.jogo = response.data;
        console.log(this.jogo);
      }).catch(error => console.log(error));
  }

}
