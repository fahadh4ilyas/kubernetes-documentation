import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodsControllerComponent } from './pods-controller.component';

describe('PodsControllerComponent', () => {
  let component: PodsControllerComponent;
  let fixture: ComponentFixture<PodsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodsControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
