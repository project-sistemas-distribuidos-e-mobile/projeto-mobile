import { Component } from '@angular/core';
import api from 'src/api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  array_series: any[]=[];

  constructor() {}
  getseries = api.get("/series").then(response => {
    for (let animacao=0; animacao<10; animacao++){
      this.array_series.push(response.data[animacao]);
    }
  })
  .catch(error => {console.log(error)})

  getanimacao = api.get("/animacoes").then(response => {
    for (let animacao=0; animacao<10; animacao++){
      this.array_series.push(response.data[animacao]);
    }
    console.log(this.array_series);
  })
  .catch(error => {console.log(error)})

}
