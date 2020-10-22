import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBeneficiariesComponent } from './dashboard-beneficiaries.component';

describe('DashboardBeneficiariesComponent', () => {
  let component: DashboardBeneficiariesComponent;
  let fixture: ComponentFixture<DashboardBeneficiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardBeneficiariesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
