
import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.css']
})
export class VideopageComponent implements OnInit {
  
  tema:Tema = new Tema
  idMateria: number 
  video = ''
  titulo = 'Bem-vindo!'
  descricao = 'Bem vindo asçdhashd ikahs dlashd apid klhs adka pasdjapç djupasj'

  @Input()
  url: string = this.video;
  urlSafe: SafeResourceUrl;

  
  constructor(
    public sanitizer: DomSanitizer,
    private temaService: TemaService,
    private route: ActivatedRoute
  
    ) { }

  ngOnInit() {

    window.scroll(0,0)
    
    this.idMateria = this.route.snapshot.params['id']

    /* Playlist */
    this.temaService.refreshToken()
    this.getMateriaId()



    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    
  }

  troca(link:string){
    this.video=link
    this.url = this.video;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.video)
  }

  /* Playlist */
  getMateriaId(){
    console.log(this.idMateria)
    this.temaService.getByIdTema(this.idMateria).subscribe((resp:Tema)=>{
      this.tema=resp
    })
  }

  trocarAula(linkVideo:string, titulo:string, descricao: string){
    console.log(titulo)
    this.video=linkVideo
    this.titulo = titulo
    this.descricao = descricao
    this.url = this.video;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.video)
  }

}
