import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Data } from 'src/models/Data';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {
  animacoes: Data[] = [];

  constructor() { }

  ngOnInit(): void {
    api.get('/animacoes')
    .then(response => {
      this.animacoes = response.data;
    }).catch(error => console.log(error))  
  }
  abrirAnimacao(id: number){
    //fazer uma mudança para consulta tanto de filmes quanto de tv shows
    api.post(`/titulo/tv/${id}`, id)
    .then(response => {
    })
    .catch(error => console.log(error));
  }

}
