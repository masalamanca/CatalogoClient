import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-by-catalog',
  templateUrl: './product-by-catalog.component.html',
  styleUrls: ['./product-by-catalog.component.css'],
})
export class ProductByCatalogComponent implements OnInit {
  products: any[] = [];
  catalog: string = '';
  displayedColumns = ['id', 'product', 'dimensions'];

  constructor(private router: ActivatedRoute, private routerNavigate: Router) {}

  ngOnInit(): void {
    const products = this.router.snapshot.queryParamMap.get('products');
    const catalog = this.router.snapshot.queryParamMap.get('catalog') ?? '';
    this.catalog = catalog;
    this.products = JSON.parse(products ?? '[]');
  }

  goBack() {
    this.routerNavigate.navigate(['/']);
  }
}
