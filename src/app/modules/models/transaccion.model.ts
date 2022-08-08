export interface Transaccion
{
  idCliente: number,
  idCuenta: number,
  valor: number,
  idTipoTransaccion: number,
  nota?: string
}

export interface TipoTransaccion
{
  idTipoTransaccion: number,
  tipoTransaccion: string,
}
