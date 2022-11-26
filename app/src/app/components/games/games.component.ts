import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Jogo } from 'src/models/Jogo';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  jogos: Jogo[] = [];
  constructor() { }

  ngOnInit(): void {
    api.get('/jogos')
    .then(response => {
      this.jogos = response.data;
    }).catch(error => console.log(error));  
  }


  abrirJogo(id: number){
    api.post(`/titulo/jogo/${id}`, id)
    .then(response => {
    })
    .catch(error => console.log(error));
  }

}
