import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoUComponent } from './catalogo-u/catalogo-u.component';
import { ProductByCatalogComponent } from './product-by-catalog/product-by-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoUComponent,
  },
  {
    path: 'products/byCatalog',
    component: ProductByCatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
