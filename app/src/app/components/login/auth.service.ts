import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, getAuth, updateProfile } from '@angular/fire/auth';
import { signInWithEmailAndPassword} from '@firebase/auth';
import { from, switchMap } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAtual$ = authState(this.auth);
  
  constructor( private auth: Auth ) { }

  cadastro(nome: string, email: string, senha: string){
    return from(createUserWithEmailAndPassword(this.auth, email, senha))
    .pipe(switchMap(({ user }) => updateProfile(user, {displayName: nome})));
  }

  login(email: string, senha: string){
    return from(signInWithEmailAndPassword(this.auth, email, senha));
  }

  logout(){
    return from(this.auth.signOut());
  }
}
