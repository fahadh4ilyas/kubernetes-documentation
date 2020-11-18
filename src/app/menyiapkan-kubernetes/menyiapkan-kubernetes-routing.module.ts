import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemasangKubernetesComponent } from './memasang-kubernetes/memasang-kubernetes.component';
import { MemasangLensTidakWajibComponent } from './memasang-lens-tidak-wajib/memasang-lens-tidak-wajib.component';
import { MembuatClusterComponent } from './membuat-cluster/membuat-cluster.component';
import { MendaftarkanPrivateDockerRegistryComponent } from './mendaftarkan-private-docker-registry/mendaftarkan-private-docker-registry.component';
import { MenggunakanBerkasConfigKubernetesComponent } from './menggunakan-berkas-config-kubernetes/menggunakan-berkas-config-kubernetes.component';
import { MenghapusNodeDariClusterComponent } from './menghapus-node-dari-cluster/menghapus-node-dari-cluster.component';

import { MenyiapkanKubernetesComponent } from './menyiapkan-kubernetes.component';

const routes: Routes = [
  { path: '1-memasang-kubernetes', component: MemasangKubernetesComponent },
  { path: '2-membuat-cluster', component: MembuatClusterComponent },
  { path: '3-menggunakan-berkas-config-kubernetes', component: MenggunakanBerkasConfigKubernetesComponent },
  { path: '4-mendaftarkan-private-docker-registry', component: MendaftarkanPrivateDockerRegistryComponent },
  { path: '5-menghapus-node-dari-cluster', component: MenghapusNodeDariClusterComponent },
  { path: '6-memasang-lens-tidak-wajib', component: MemasangLensTidakWajibComponent },
  { path: '', component: MenyiapkanKubernetesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenyiapkanKubernetesRoutingModule { }
