import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodsControllerIiComponent } from './pods-controller-ii.component';

describe('PodsControllerIiComponent', () => {
  let component: PodsControllerIiComponent;
  let fixture: ComponentFixture<PodsControllerIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodsControllerIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodsControllerIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
