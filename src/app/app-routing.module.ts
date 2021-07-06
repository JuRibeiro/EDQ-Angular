import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriaEditComponent } from './edit/materia-edit/materia-edit.component';
import { MateriaDeleteComponent } from './delete/materia-delete/materia-delete.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch: 'full'},
  {path:'homepage',component: HomepageComponent},
  {path: "login", component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'plataforma', component: PlataformaComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'materia-edit/:id', component: MateriaEditComponent},
  {path: 'materia-delete/:id', component:MateriaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
