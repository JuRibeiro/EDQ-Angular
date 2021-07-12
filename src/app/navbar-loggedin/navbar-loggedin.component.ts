import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar-loggedin',
  templateUrl: './navbar-loggedin.component.html',
  styleUrls: ['./navbar-loggedin.component.css']
})
export class NavbarLoggedinComponent implements OnInit {
  
  nome = environment.nomeCompleto
  foto = ''
  id = environment.id

  semFoto() {
    if(environment.foto == null){
     this.foto = 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png'
    }
    else if (environment.foto == environment.foto) {
      this.foto = environment.foto
    } 
  }

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    //console.log(this.foto)
    this.semFoto()
    //console.log(this.foto)
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token=''
    environment.nomeCompleto=''
    environment.email=''
    environment.foto=''
    environment.id=0
  }

}
