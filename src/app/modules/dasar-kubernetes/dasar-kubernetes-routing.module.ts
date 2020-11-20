import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessControlComponent } from './components/access-control/access-control.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

import { DasarKubernetesComponent } from './dasar-kubernetes.component';
import { NamespaceComponent } from './components/namespace/namespace.component';
import { NodeComponent } from './components/node/node.component';
import { PodComponent } from './components/pod/pod.component';
import { PodsControllerIiComponent } from './components/pods-controller-ii/pods-controller-ii.component';
import { PodsControllerComponent } from './components/pods-controller/pods-controller.component';
import { ServiceComponent } from './components/service/service.component';
import { StorageComponent } from './components/storage/storage.component';

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
