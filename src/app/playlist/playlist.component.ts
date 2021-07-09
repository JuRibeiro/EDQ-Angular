import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  tema:Tema = new Tema
  idMateria:number =5
  constructor(
    private router: Router,
    private temaService: TemaService,
  ) { }

  ngOnInit() {
    this.temaService.refreshToken()
    this.getMateriaId()
  }

  getMateriaId(){
    console.log(this.idMateria)
    this.temaService.getByIdTema(this.idMateria).subscribe((resp:Tema)=>{
      this.tema=resp
    })
  }

  trocarAula(id:number){
console.log(id)
  }

}
