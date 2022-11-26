import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { StoreModel } from 'src/models/Store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http: HttpClient) { }

  post(key: any, data: StoreModel){
    axios.post(`${environment.firebase.databaseURL}/usuarios/${key}/.json`, {
      id: data.id,
      nome: data.nome,
      poster: data.poster,
    })
    .then(response => {
      console.log(response);
    })
    .catch(erro => console.log(erro)
    );
  };

  get(id: string): Observable<any[]>{
    return this.http.get<any[]>(`${environment.firebase.databaseURL}/usuarios/${id}/.json`);
  };

  delete(user:string, id: string): Observable<any>{
    return this.http.delete<any>(`${environment.firebase.databaseURL}/usuarios/${user}/${id}/.json`);
  };
  
}
