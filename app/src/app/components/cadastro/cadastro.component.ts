import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../login/auth.service';

export function senhasCoincidemValidador(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirmarSenha = control.get('confirmarSenha')?.value;

    if(senha && confirmarSenha && senha !== confirmarSenha){
      return {
        senhasNaoCoincidem: true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmarSenha: new FormControl('', Validators.required, )
  }, {validators: senhasCoincidemValidador() })

  constructor( 
    private authservice: AuthService, 
    private router: Router,
    private toast: HotToastService,
    ) { }

  ngOnInit(): void {
  }

  get nome(){
    return this.cadastroForm.get('nome');
  }

  get email(){
    return this.cadastroForm.get('email');
  }

  get senha(){
    return this.cadastroForm.get('senha');
  }

  get confirmarSenha(){
    return this.cadastroForm.get('senha');
  }

  validaNome(){
    if(!this.cadastroForm.controls['email'].valid){
      this.toast.error('Por favor, insira um nome.');
    }
  }
  validaEmail(){
    if(!this.cadastroForm.controls['email'].valid){
      this.toast.error('Por favor, insira um e-mail válido.');
    }
  }
  validaSenha(){
    if(!this.cadastroForm.controls['senha'].valid){
      this.toast.error('Por favor, insira uma senha.');
    }
  }
  validaConfirmaSenha(){
    if(!this.cadastroForm.controls['confirmarSenha'].valid){
      this.toast.error('Ops! As senhas informadas não coincidem.');
    }
  }

  cadastro(){
    const {nome, email, senha} = this.cadastroForm.value;
    if(!this.cadastroForm.valid || !nome || !senha || !email){
      this.toast.error("Por favor, preencha os campos antes de continuar.");
      return;
    }
    this.authservice
      .cadastro(nome, email, senha)
      .pipe(
        this.toast.observe({
          success: 'Parabéns, cadastro realizado com sucesso!',
          loading: 'Registrando...',
          error: ({message}) => `${message}`
        })
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
    }
}
