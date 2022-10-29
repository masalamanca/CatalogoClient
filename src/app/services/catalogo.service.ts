import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private api: string = 'http://localhost:3000/catalogo'

  constructor(private http: HttpClient) {}

  public getCatalogo() {
    return this.http.get(this.api)
  }
}
