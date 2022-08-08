export interface Cliente
{
  idCliente: number,
  idTipoIdentificacion?: number,
  numeroIdentificacion: string
  nombres: string,
  apellidos: string,
  razonSocial: string,
  celular: string,
  telefono: string,
  municipio: string,
  departamento: string,
  nota?: string
}
