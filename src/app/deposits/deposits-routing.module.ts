import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits.component';

const routes: Routes = [{ path: 'admin/deposits', component: DepositsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositsRoutingModule {}
