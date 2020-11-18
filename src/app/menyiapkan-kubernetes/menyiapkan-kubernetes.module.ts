import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenyiapkanKubernetesRoutingModule } from './menyiapkan-kubernetes-routing.module';
import { MenyiapkanKubernetesComponent } from './menyiapkan-kubernetes.component';
import { MemasangKubernetesComponent } from './memasang-kubernetes/memasang-kubernetes.component';
import { MembuatClusterComponent } from './membuat-cluster/membuat-cluster.component';
import { MendaftarkanPrivateDockerRegistryComponent } from './mendaftarkan-private-docker-registry/mendaftarkan-private-docker-registry.component';
import { MenghapusNodeDariClusterComponent } from './menghapus-node-dari-cluster/menghapus-node-dari-cluster.component';
import { MemasangLensTidakWajibComponent } from './memasang-lens-tidak-wajib/memasang-lens-tidak-wajib.component';
import { MenggunakanBerkasConfigKubernetesComponent } from './menggunakan-berkas-config-kubernetes/menggunakan-berkas-config-kubernetes.component';


@NgModule({
  declarations: [MenyiapkanKubernetesComponent, MemasangKubernetesComponent, MembuatClusterComponent, MenggunakanBerkasConfigKubernetesComponent, MendaftarkanPrivateDockerRegistryComponent, MenghapusNodeDariClusterComponent, MemasangLensTidakWajibComponent],
  imports: [
    CommonModule,
    MenyiapkanKubernetesRoutingModule
  ]
})
export class MenyiapkanKubernetesModule { }
