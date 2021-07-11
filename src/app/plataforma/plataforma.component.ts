import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    if (environment.token == '')
    {
      alert('Sua sessão expirou. Faça login novamente')
      this.router.navigate(['/login'])
    }

    this.temaService.refreshToken()
    this.postagemService.refreshToken()
  }

}
