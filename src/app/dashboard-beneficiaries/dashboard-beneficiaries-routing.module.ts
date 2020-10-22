import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardBeneficiariesComponent } from './dashboard-beneficiaries.component';

const routes: Routes = [{ path: 'dashboard/beneficiaries', component: DashboardBeneficiariesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardBeneficiariesRoutingModule {}
