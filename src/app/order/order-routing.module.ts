import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { OrderComponent } from './Order.component';

const routes: Routes = [  Shell.childRoutes([
  { path: 'order', component: OrderComponent }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
