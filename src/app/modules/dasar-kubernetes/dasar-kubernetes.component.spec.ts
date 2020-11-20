import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasarKubernetesComponent } from './dasar-kubernetes.component';

describe('DasarKubernetesComponent', () => {
  let component: DasarKubernetesComponent;
  let fixture: ComponentFixture<DasarKubernetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasarKubernetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasarKubernetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
