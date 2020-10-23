import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) {
    this.createOrderForm();
  }
  ngOnInit(): void {

}

private createOrderForm() {
  this.orderForm = this.formBuilder.group(
    {
      itemLink: ['', [Validators.required]],
    }
  );

}

async submit() {
  let order = this.orderForm.value;
  let itemLink: string = order.itemLink.trim();

  order = {
    ...order,
    itemLink: itemLink,
  };

  await this.orderService
    .orderItem(order)
    .toPromise()
    .then((success) => {
      console.log(success);
    });
}

}