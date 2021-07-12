import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-profbar',
  templateUrl: './profbar.component.html',
  styleUrls: ['./profbar.component.css']
})
export class ProfbarComponent implements OnInit {
  postagem:Postagem= new Postagem()
  tema: Tema = new Tema()
  user: User = new User()
  listaTemas: Tema[]
  idTema: number

  constructor( 
    private temaService: TemaService,
    private postagemService: PostagemService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.temaService.refreshToken()
    this.postagemService.refreshToken()
    /* this.findAllTemas() */
  }

  postTemaId(event:any){
    this.idTema= event.target.value
    /* console.log(this.idTema) */
  }

  getTemaAno(event:any){
    return this.temaService.getByAnoConteudo(event.target.value).subscribe((resp:Tema[])=>{
      this.listaTemas = resp
    })
  }

/*   findAllTemas()
  {
    this.temaService.getAllTema().subscribe((resposta: Tema[])=>
    {
      this.listaTemas=resposta
    })
  } */

  cadastrar()
  {
    this.temaService.postTema(this.tema).subscribe((resposta: Tema)=>
    {
      this.tema = resposta
      alert('Matéria cadastrada com sucesso!')
      this.tema = new Tema()
    })
  }

  cadastrarPostagem(){
    this.tema.id= this.idTema
    this.postagem.tema = this.tema
    this.user.id = environment.id
    this.postagem.usuario = this.user
    console.table(this.postagem)
    this.postagemService.postPostagem(this.postagem).subscribe((resp:Postagem) =>{
      this.postagem=resp
      alert('Aula postada com sucesso!')
      this.postagem = new Postagem()
      this.tema = new Tema()
    })
  }

  limparCampos(){
    this.postagem = new Postagem()
    this.tema = new Tema()
  }
}
