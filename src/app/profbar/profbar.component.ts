import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-profbar',
  templateUrl: './profbar.component.html',
  styleUrls: ['./profbar.component.css']
})
export class ProfbarComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  constructor( 
    private temaService: TemaService

  ) { }

  ngOnInit() {
    this.temaService.refreshToken()
    this.findAllTemas()
  }

  
  findAllTemas()
  {
    this.temaService.getAllTema().subscribe((resposta: Tema[])=>
    {
      this.listaTemas=resposta
    })
  }

  cadastrar()
  {
    this.temaService.postTema(this.tema).subscribe((resposta: Tema)=>
    {
      this.tema = resposta
      alert('Matéria cadastrada com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }

}
