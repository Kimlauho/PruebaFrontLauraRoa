import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  idCliente: number = 0;

  @Output() clienteSeleccionado = new EventEmitter<number>();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.obtenerClientes()
    .subscribe(data => {
      this.clientes = data;
    });
  }

  selectedCliente(value: number){
    console.log("cliente ",value);
    this.clienteSeleccionado.emit(value);
  }
}
