import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasarKubernetesRoutingModule } from './dasar-kubernetes-routing.module';
import { DasarKubernetesComponent } from './dasar-kubernetes.component';
import { NodeComponent } from './node/node.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { PodComponent } from './pod/pod.component';
import { PodsControllerComponent } from './pods-controller/pods-controller.component';
import { ServiceComponent } from './service/service.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { StorageComponent } from './storage/storage.component';
import { PodsControllerIiComponent } from './pods-controller-ii/pods-controller-ii.component';
import { AccessControlComponent } from './access-control/access-control.component';


@NgModule({
  declarations: [DasarKubernetesComponent, NodeComponent, NamespaceComponent, PodComponent, PodsControllerComponent, ServiceComponent, ConfigurationComponent, StorageComponent, PodsControllerIiComponent, AccessControlComponent],
  imports: [
    CommonModule,
    DasarKubernetesRoutingModule
  ]
})
export class DasarKubernetesModule { }
