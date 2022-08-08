import { Component, Inject, OnInit } from '@angular/core';
import { Cuenta } from '../../models/cuenta.model';
import { CuentaService } from '../../services/cuenta.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit {

  cuentas: Cuenta[] = [];
  idCliente: number = 0;
  cuenta: Cuenta = {
    idCuenta: 0,
    numeroCuenta: '',
    saldo: 0
  };
  alert: boolean = false;
  mensaje: string = "";

  constructor(
    private cuentaService: CuentaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.obtenerCuentas();
  }

  selectCliente(value: number){
    console.log("cliente seleccionado ", value);
    this.idCliente = value;
  }

  crearCuenta(cuenta: Cuenta){
    this.cuentaService.crearCuenta(cuenta)
    .subscribe(data => {
      this.cuenta = data;
      this.alert = true;
      this.mensaje = data.nota + "";
      return cuenta;
    });
  }

  obtenerCuentas(){
    this.cuentaService.obtenerCuentas(this.idCliente)
    .subscribe(data => {
      this.cuentas = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CuentasDialog, {
      width: '250px',
      data: null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: any[]) => {
      console.log("afterClosed",result);
    });
  }

}

// agregar configuracion del dialogo (modal)*
@Component({
  selector: 'app-cuentas-dialog',
  templateUrl: 'cuentas.dialog.html',
  styleUrls: ['./cuentas.component.scss', '../../../app.component.scss']
})

export class CuentasDialog {

  error: boolean = false;
  msjError: string = "";
  idCliente: number = 0;

  cuenta: Cuenta = {
    idCuenta: 0,
    numeroCuenta: '',
    saldo: 0
  };

  titleModal: String = '';

  constructor(
    private cuentaServices: CuentaService,
    public dialogRef: MatDialogRef<CuentasDialog>,
  ) {}

  selectCliente(value: number){
    this.idCliente = value;
  }

  crearInfo() {
    this.cuenta.idCliente = this.idCliente;

    if(this.cuenta.idCliente == 0) {
      this.error = true;
      this.msjError = "El campo cliente es obligatorio";
      return false;
    }

    if(this.cuenta.numeroCuenta == null || this.cuenta.numeroCuenta == "" ) {
      this.error = true;
      this.msjError = "El campo numero de cuenta es obligatorio";
      return false;
    }
    console.log(this.cuenta);

    this.cuentaServices.crearCuenta(this.cuenta).subscribe(
      data => {
        this.error = false;
        this.dialogRef.close();
      },
      error => {
        this.error = false;
        this.msjError = error;
      }
    )
    return true;

  }

}
