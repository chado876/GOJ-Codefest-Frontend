import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOrdersComponent } from './dashboard-orders.component';

const routes: Routes = [{ path: 'admin/orders', component: DashboardOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardOrdersRoutingModule {}
