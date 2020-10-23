import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { OrderRoutingModule } from './Order-routing.module';
import { OrderComponent } from './Order.component';

@NgModule({
  imports: [CommonModule,     FormsModule,
    ReactiveFormsModule,TranslateModule, SharedModule, Angulartics2Module, OrderRoutingModule],
  declarations: [OrderComponent],
})
export class OrderModule {}
