import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInvoiceuploadComponent } from './dashboard-invoiceupload.component';

describe('DashboardInvoiceuploadComponent', () => {
  let component: DashboardInvoiceuploadComponent;
  let fixture: ComponentFixture<DashboardInvoiceuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardInvoiceuploadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInvoiceuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
