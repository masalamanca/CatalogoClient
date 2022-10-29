import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


// Librería para poder consumir el servicio
import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app-component/app.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { CatalogoUComponent } from './catalogo-u/catalogo-u.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// se incluye esto y la coma despues del corchete anterior
const appRoutes: Routes =
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Inicio'
  },
{
  path: 'Inicio',
  component: MenuInicioComponent,   
},
{
  path: 'catalogo-u',
  component: CatalogoUComponent,   
}

];

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

@NgModule({
declarations: [
  AppComponent,
  MenuInicioComponent,
  CatalogoUComponent
],
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forRoot(appRoutes), // se agregan estos 
  HttpClientModule, BrowserAnimationsModule,  // <- Agregar la clase
  MatDialogModule,
  MatButtonModule
],

providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
