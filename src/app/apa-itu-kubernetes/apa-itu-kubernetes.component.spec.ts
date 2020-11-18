import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaItuKubernetesComponent } from './apa-itu-kubernetes.component';

describe('ApaItuKubernetesComponent', () => {
  let component: ApaItuKubernetesComponent;
  let fixture: ComponentFixture<ApaItuKubernetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApaItuKubernetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaItuKubernetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
