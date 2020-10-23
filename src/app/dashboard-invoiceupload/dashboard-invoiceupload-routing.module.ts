import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardInvoiceuploadComponent } from './dashboard-invoiceupload.component';

const routes: Routes = [{ path: 'dashboard/invoice-upload', component: DashboardInvoiceuploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardInvoiceuploadRoutingModule {}
