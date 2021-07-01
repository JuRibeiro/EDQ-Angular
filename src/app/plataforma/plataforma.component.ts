import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.token == '')
    {
      alert('Sua sessão expirou. Faça login novamente')
      this.router.navigate(['/login'])
    }
  }

}
