import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient ) { }

  obtenerClientes(){
    return this.http.get<Cliente[]>(environment.apiUrl + '/api/Cliente/obtenerClientes');
  }
}
