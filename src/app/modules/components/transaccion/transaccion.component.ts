import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../../models/cuenta.model';
import { TipoTransaccion, Transaccion } from '../../models/transaccion.model';
import { CuentaService } from '../../services/cuenta.service';
import { TransaccionService } from '../../services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {

  constructor(
    private transaccionService: TransaccionService,
    private cuentaService: CuentaService,
    ) { }

  idTipoTransaccion: number = 0;
  idCuenta: number = 0;
  idCliente: number = 0;
  cuentas: Cuenta[] = []
  alert: boolean = false;
  alertError: boolean = false;
  mensaje: string = "";
  saldo:number = 0;

  transaccion: Transaccion = {
    idCliente: 0,
    idCuenta: 0,
    valor: 0,
    idTipoTransaccion: 0,
  }

  tiposTransaccion: TipoTransaccion[] = [
    {
      idTipoTransaccion: 1,
      tipoTransaccion: "Deposito"
    },
    {
      idTipoTransaccion: 2,
      tipoTransaccion: "Retiro"
    }
  ]

  ngOnInit(): void {
  }

  selectCliente(value: number){
    this.idCliente = value;
    this.obtenerCuentas();
  }

  selectedTipoTransaccion(value: number){
    this.transaccion.idCliente = this.idCliente;
    this.transaccion.idTipoTransaccion = value;
  }

  selectedCuenta(value: number){
    this.transaccion.idCuenta =  this.idCuenta;
    this.transaccion.idCliente = this.idCliente;
    this.cuentas.forEach(element => {
      if(element.idCuenta == this.idCuenta){
        this.saldo = element.saldo;
        return false;
      }
      return;
    });
  }

  crearTransaccion(){
    console.log("saldo", this.saldo);
    console.log("valor", this.transaccion.valor);
    if(this.idTipoTransaccion == 2 && this.saldo < this.transaccion.valor|| this.saldo > this.transaccion.valor){
      this.alertError = true;
      this.mensaje = "fondos insuficientes - Saldo Disponible: " + this.saldo;
      this.alert = false;
      return false;
    }

    this.transaccionService.crearTransaccion(this.transaccion)
    .subscribe(data => {
      this.alert = true;
      this.alertError = false;
      this.mensaje = data.nota +"";
    });
    return true;
  }

  obtenerCuentas(){
    this.cuentaService.obtenerCuentas(this.idCliente)
    .subscribe(data => {
      this.cuentas = data;
    });
  }

}
