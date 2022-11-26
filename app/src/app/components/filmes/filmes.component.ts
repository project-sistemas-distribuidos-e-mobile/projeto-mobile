import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Data } from 'src/models/Data';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Data[] = [];
  constructors() { }
  
  ngOnInit():void {
    api.get('/filmes')
    .then(response => {
      this.filmes = response.data;
    }).catch(error => console.log(error))  
  }

  abrirFilme(id: number){
    api.post(`/titulo/movie/${id}`, id)
    .then(response => {
    })
    .catch(error => console.log(error));
  }
}