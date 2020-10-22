import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/i18n';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent, data: { title: extract('Landing Page') } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
