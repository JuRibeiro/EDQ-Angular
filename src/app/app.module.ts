import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

import { NavbarLoggedinComponent } from './navbar-loggedin/navbar-loggedin.component';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MateriasComponent } from './materias/materias.component';
import { MateriaEditComponent } from './edit/materia-edit/materia-edit.component';
import { MateriaDeleteComponent } from './delete/materia-delete/materia-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    TeamComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    SigninComponent,
    ProfileComponent,
    ContactComponent,
    NavbarLoggedinComponent,
    PlataformaComponent,
    CarouselComponent,
    MateriasComponent,
    MateriaEditComponent,
    MateriaDeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:LocationStrategy,
    useClass:HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }