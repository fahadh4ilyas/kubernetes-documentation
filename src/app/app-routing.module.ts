import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApaItuKubernetesComponent } from './components/apa-itu-kubernetes/apa-itu-kubernetes.component';

import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PendahuluanComponent } from './components/pendahuluan/pendahuluan.component';

const routes: Routes = [
  { path: 'pendahuluan', component: PendahuluanComponent },
  { path: 'apa-itu-kubernetes', component: ApaItuKubernetesComponent },
  { path: 'menyiapkan-kubernetes', loadChildren: () => import('./modules/menyiapkan-kubernetes/menyiapkan-kubernetes.module').then(m => m.MenyiapkanKubernetesModule) },
  { path: 'dasar-kubernetes', loadChildren: () => import('./modules/dasar-kubernetes/dasar-kubernetes.module').then(m => m.DasarKubernetesModule) },
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
