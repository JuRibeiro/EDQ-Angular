import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  private auth: AuthService,
  private router: Router
) { }

ngOnInit() {
  window.scroll(0,0)
}

entrar(){
  this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
    this.userLogin = resp

    environment.token = this.userLogin.token
    environment.nome = this.userLogin.nome
    environment.foto = this.userLogin.foto
    environment.id = this.userLogin.id
    environment.tipo = this.userLogin.tipo
    
    this.router.navigate(['/'])
  }, erro =>{
    if(erro.status == 500){
      alert('Usuário ou senha estão incorretos!')
    }
  })
}

}