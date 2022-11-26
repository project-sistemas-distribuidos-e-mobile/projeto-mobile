import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });
  
  
  constructor(
    private authservice: AuthService, 
    private router: Router,
    private toast: HotToastService,
    ) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get senha(){
    return this.loginForm.get('senha');
  }

  validaEmail(){
    if(!this.loginForm.controls['email'].valid){
      this.toast.error('Por favor, insira um e-mail válido.');
    }
  }
  validaSenha(){
    if(!this.loginForm.controls['senha'].valid){
      this.toast.error('Por favor, insira uma senha.');
    }
  }
  
  login(){
    if(!this.loginForm.valid){
      this.toast.error("Por favor, preencha os campos antes de continuar.");
      return;
    }
    const {email, senha} = this.loginForm.value;
    this.authservice.login(email, senha).pipe(
      this.toast.observe({
        success: 'Logado com sucesso!',
        loading: 'Fazendo login...',
        error: 'Infelizmente houve um erro, tente novamente.'
      })
    ).subscribe(() => {
      this.router.navigate(['/']);
    })
    
  }

  getErrorMessage() {
    console.log(this.loginForm.controls['email']);
}
  
}

