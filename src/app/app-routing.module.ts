import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApaItuKubernetesComponent } from './apa-itu-kubernetes/apa-itu-kubernetes.component';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PendahuluanComponent } from './pendahuluan/pendahuluan.component';

const routes: Routes = [
  { path: 'pendahuluan', component: PendahuluanComponent },
  { path: 'apa-itu-kubernetes', component: ApaItuKubernetesComponent },
  { path: 'menyiapkan-kubernetes', loadChildren: () => import('./menyiapkan-kubernetes/menyiapkan-kubernetes.module').then(m => m.MenyiapkanKubernetesModule) },
  { path: 'dasar-kubernetes', loadChildren: () => import('./dasar-kubernetes/dasar-kubernetes.module').then(m => m.DasarKubernetesModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      // onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
