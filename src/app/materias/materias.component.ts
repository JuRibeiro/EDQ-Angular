import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if (environment.token == '')
    {
      //alert('Sua sessão expirou. Faça login novamente')
      this.router.navigate(['/entrar'])
    }
  }

}
