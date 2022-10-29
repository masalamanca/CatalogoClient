import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private api: string = 'http://localhost:3000/productos'

  constructor(private http: HttpClient) {}

  public getProductsByCatalog(catalogID: string) {
    return this.http.get(`${this.api}/byCatalog/${catalogID}`)
  }
}
