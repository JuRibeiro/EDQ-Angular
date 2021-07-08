import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  tema: Postagem = new Postagem()
  listaPostagens: Postagem[]

  constructor(
    private router: Router,
    private PostagemService: PostagemService
  ) { }

  ngOnInit(){

    if (environment.token == '')
    {
      alert('Sua sessão expirou. Faça login novamente.')
      this.router.navigate(['/login'])
    }
    
    this.findAllPostagens()
  }

  findAllPostagens() {
    this.PostagemService.getAllPostagem().subscribe((resp: Postagem[])=> {
      this.listaPostagens = resp
    })
  }

}
