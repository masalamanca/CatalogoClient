import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CatalogoService } from '../services/catalogo.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-catalogo-u',
  templateUrl: './catalogo-u.component.html',
  styleUrls: ['./catalogo-u.component.css']
})
export class CatalogoUComponent implements OnInit {

  catalogos: any[] = []

  constructor(private serviceCatalogo: CatalogoService, private productsService: ProductosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCatalogo()
  }

  getCatalogo() {
    this.serviceCatalogo.getCatalogo().subscribe({
      next: (response: any) => {
       this.catalogos = response
      }
    })
  }

  getProductsByCatalogId(catalogID: string) {
    this.productsService.getProductsByCatalog(catalogID).subscribe({
      next: (response: any) => {
        this.openDialog(response)
      }
    })
  }

  openDialog(products: any[]): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '450px',
      data: products,
      height: '500px'
    });
  }

}

@Component({
  selector: 'dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./catalogo-u.component.css']
})
export class DialogAnimationsExampleDialog {
  products: any[] = []

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any[]) {
    this.products = data
  }
}