import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    if (environment.token == '')
    {
      alert('Sua sessão expirou. Faça login novamente.')
      this.router.navigate(['/login'])
    }

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
