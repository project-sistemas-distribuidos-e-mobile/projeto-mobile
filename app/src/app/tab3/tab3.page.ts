import { Component } from '@angular/core';
import api from 'src/api';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  array_jogos: any;

  constructor() {}
  getjogos = api.get("/jogos").then(response => {
    console.log(response.data);
    this.array_jogos = response.data;
  })
  .catch(error => {console.log(error)})

}
