import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Data } from 'src/models/Data';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Data[] = [];
  constructor() { }

  ngOnInit(): void {
    api.get('/series')
    .then(response => {
      this.series = response.data;
    }).catch(error => console.log(error))  
  }

  abrirSerie(id: number){
    api.post(`/titulo/tv/${id}`, id)
    .then(response => {
    })
    .catch(error => console.log(error));
  }
}
