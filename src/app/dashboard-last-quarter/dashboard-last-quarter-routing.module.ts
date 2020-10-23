import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLastQuarterComponent } from './dashboard-last-quarter.component';

const routes: Routes = [{ path: 'admin/last-quarter-report', component: DashboardLastQuarterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLastQuarterRoutingModule {}
