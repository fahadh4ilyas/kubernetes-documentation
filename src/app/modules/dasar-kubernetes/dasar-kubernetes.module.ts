import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasarKubernetesRoutingModule } from './dasar-kubernetes-routing.module';
import { DasarKubernetesComponent } from './dasar-kubernetes.component';
import { NodeComponent } from './components/node/node.component';
import { NamespaceComponent } from './components/namespace/namespace.component';
import { PodComponent } from './components/pod/pod.component';
import { PodsControllerComponent } from './components/pods-controller/pods-controller.component';
import { ServiceComponent } from './components/service/service.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { StorageComponent } from './components/storage/storage.component';
import { PodsControllerIiComponent } from './components/pods-controller-ii/pods-controller-ii.component';
import { AccessControlComponent } from './components/access-control/access-control.component';


@NgModule({
  declarations: [DasarKubernetesComponent, NodeComponent, NamespaceComponent, PodComponent, PodsControllerComponent, ServiceComponent, ConfigurationComponent, StorageComponent, PodsControllerIiComponent, AccessControlComponent],
  imports: [
    CommonModule,
    DasarKubernetesRoutingModule
  ]
})
export class DasarKubernetesModule { }
