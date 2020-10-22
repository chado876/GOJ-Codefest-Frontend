import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCurrentmonthComponent } from './dashboard-currentmonth.component';

describe('DashboardCurrentmonthComponent', () => {
  let component: DashboardCurrentmonthComponent;
  let fixture: ComponentFixture<DashboardCurrentmonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCurrentmonthComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCurrentmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
