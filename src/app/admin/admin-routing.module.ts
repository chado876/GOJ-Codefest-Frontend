import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AdminComponent } from './admin.component';

const routes: Routes = [  Shell.childRoutes([
  { path: 'admin', component: AdminComponent,data: { title: marker('Admin') } }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
