import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCurrentmonthComponent } from './dashboard-currentmonth.component';

const routes: Routes = [{ path: 'admin/current-month-report', component: DashboardCurrentmonthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCurrentmonthRoutingModule {}
