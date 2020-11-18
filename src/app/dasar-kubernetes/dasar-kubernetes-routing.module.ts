import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessControlComponent } from './access-control/access-control.component';
import { ConfigurationComponent } from './configuration/configuration.component';

import { DasarKubernetesComponent } from './dasar-kubernetes.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { NodeComponent } from './node/node.component';
import { PodComponent } from './pod/pod.component';
import { PodsControllerIiComponent } from './pods-controller-ii/pods-controller-ii.component';
import { PodsControllerComponent } from './pods-controller/pods-controller.component';
import { ServiceComponent } from './service/service.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
  { path: '1-node', component: NodeComponent },
  { path: '2-namespace', component: NamespaceComponent },
  { path: '3-pod', component: PodComponent },
  { path: '4-pods-controller', component: PodsControllerComponent },
  { path: '5-service', component: ServiceComponent },
  { path: '6-configuration', component: ConfigurationComponent },
  { path: '7-storage', component: StorageComponent },
  { path: '8-pods-controller-ii', component: PodsControllerIiComponent },
  { path: '9-access-control', component: AccessControlComponent },
  { path: '', component: DasarKubernetesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasarKubernetesRoutingModule { }
