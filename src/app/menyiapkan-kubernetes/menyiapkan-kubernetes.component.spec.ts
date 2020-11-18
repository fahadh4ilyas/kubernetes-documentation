import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenyiapkanKubernetesComponent } from './menyiapkan-kubernetes.component';

describe('MenyiapkanKubernetesComponent', () => {
  let component: MenyiapkanKubernetesComponent;
  let fixture: ComponentFixture<MenyiapkanKubernetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenyiapkanKubernetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenyiapkanKubernetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
