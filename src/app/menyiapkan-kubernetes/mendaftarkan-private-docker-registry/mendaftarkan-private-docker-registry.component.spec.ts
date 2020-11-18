import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MendaftarkanPrivateDockerRegistryComponent } from './mendaftarkan-private-docker-registry.component';

describe('MendaftarkanPrivateDockerRegistryComponent', () => {
  let component: MendaftarkanPrivateDockerRegistryComponent;
  let fixture: ComponentFixture<MendaftarkanPrivateDockerRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MendaftarkanPrivateDockerRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MendaftarkanPrivateDockerRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
