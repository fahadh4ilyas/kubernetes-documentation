import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenyiapkanKubernetesRoutingModule } from './menyiapkan-kubernetes-routing.module';
import { MenyiapkanKubernetesComponent } from './menyiapkan-kubernetes.component';
import { MemasangKubernetesComponent } from './components/memasang-kubernetes/memasang-kubernetes.component';
import { MembuatClusterComponent } from './components/membuat-cluster/membuat-cluster.component';
import { MendaftarkanPrivateDockerRegistryComponent } from './components/mendaftarkan-private-docker-registry/mendaftarkan-private-docker-registry.component';
import { MenghapusNodeDariClusterComponent } from './components/menghapus-node-dari-cluster/menghapus-node-dari-cluster.component';
import { MemasangLensTidakWajibComponent } from './components/memasang-lens-tidak-wajib/memasang-lens-tidak-wajib.component';
import { MenggunakanBerkasConfigKubernetesComponent } from './components/menggunakan-berkas-config-kubernetes/menggunakan-berkas-config-kubernetes.component';


@NgModule({
  declarations: [MenyiapkanKubernetesComponent, MemasangKubernetesComponent, MembuatClusterComponent, MenggunakanBerkasConfigKubernetesComponent, MendaftarkanPrivateDockerRegistryComponent, MenghapusNodeDariClusterComponent, MemasangLensTidakWajibComponent],
  imports: [
    CommonModule,
    MenyiapkanKubernetesRoutingModule
  ]
})
export class MenyiapkanKubernetesModule { }
