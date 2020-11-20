import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenggunakanBerkasConfigKubernetesComponent } from './menggunakan-berkas-config-kubernetes.component';

describe('MenggunakanBerkasConfigKubernetesComponent', () => {
  let component: MenggunakanBerkasConfigKubernetesComponent;
  let fixture: ComponentFixture<MenggunakanBerkasConfigKubernetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenggunakanBerkasConfigKubernetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenggunakanBerkasConfigKubernetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
