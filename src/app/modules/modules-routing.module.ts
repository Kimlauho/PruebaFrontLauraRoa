import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {path: '', component: ModulesComponent, children: [
    {path: '', component: CuentasComponent},
    {path: 'cliente', component: ClientesComponent},
    {path: 'cuenta', component: CuentasComponent},
    {path: 'transaccion', component: TransaccionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
