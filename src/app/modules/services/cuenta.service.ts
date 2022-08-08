import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Cuenta } from '../models/cuenta.model';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private http: HttpClient) {
  }

  obtenerCuentas(idCliente: number){
    return this.http.get<Cuenta[]>(environment.apiUrl + '/api/Cuenta/obtenerCuentas/' + idCliente);
  }

  crearCuenta(cuenta: Cuenta) {
    console.log(cuenta);
    return this.http.post(environment.apiUrl + '/api/Cuenta/CrearCuenta', cuenta)
      .pipe(
        map((response: any) => {
          const data: Cuenta = response;
          return data;
        })
      );
  }
}
