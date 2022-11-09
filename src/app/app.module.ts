import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

// Librería para poder consumir el servicio
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app-component/app.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { CatalogoUComponent } from './catalogo-u/catalogo-u.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ProductByCatalogComponent } from './product-by-catalog/product-by-catalog.component';
import { FormCatalogoComponent } from './form-catalogo/form-catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuInicioComponent,
    CatalogoUComponent,
    ProductByCatalogComponent,
    FormCatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // <- Agregar la clase
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
