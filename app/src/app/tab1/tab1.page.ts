import { Component } from '@angular/core';
import api from 'src/api';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  array_filmes: any;

  constructor() {}
  getfilmes = api.get("filmes").then(response => {
    console.log(response.data);
    this.array_filmes = response.data;
  })
  .catch(error => {console.log(error)})


}
