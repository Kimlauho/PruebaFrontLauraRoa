import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { ModulesRoutingModule } from './modules-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CuentasComponent, CuentasDialog } from './components/cuentas/cuentas.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModulesComponent } from './modules.component';


@NgModule({
  declarations: [
    ModulesComponent,
    ClientesComponent,
    CuentasComponent,
    TransaccionComponent,
    MenuComponent,
    CuentasDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModulesRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatDialogModule
  ]
})
export class ModulesModule { }
