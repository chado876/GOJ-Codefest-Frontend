import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLastQuarterComponent } from './dashboard-last-quarter.component';

describe('DashboardLastQuarterComponent', () => {
  let component: DashboardLastQuarterComponent;
  let fixture: ComponentFixture<DashboardLastQuarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLastQuarterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLastQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
