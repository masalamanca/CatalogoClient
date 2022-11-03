import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CatalogoService } from '../services/catalogo.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-catalogo-u',
  templateUrl: './catalogo-u.component.html',
  styleUrls: ['./catalogo-u.component.css'],
})
export class CatalogoUComponent implements OnInit {
  displayedColumns = ['id', 'name', 'type', 'actions'];
  catalogos: any[] = [];

  constructor(
    private serviceCatalogo: CatalogoService,
    private productsService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCatalogo();
  }

  getCatalogo() {
    this.serviceCatalogo.getCatalogo().subscribe({
      next: (response: any) => {
        this.catalogos = response;
      },
    });
  }

  getProductsByCatalogId(catalogID: string, catalog: string) {
    this.productsService.getProductsByCatalog(catalogID).subscribe({
      next: (response: any) => {
        this.router.navigate(['products/byCatalog'], {
          queryParams: {
            products: JSON.stringify(response),
            catalog,
          },
          replaceUrl: false,
        });
      },
    });
  }
}
