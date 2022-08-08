import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaccion } from '../models/transaccion.model';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private http: HttpClient) {
  }

  crearTransaccion(transaccion: Transaccion){
    console.log("servicio");
    return this.http.post(environment.apiUrl + 'api/Transaccion/CrearTransaccion', transaccion)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
