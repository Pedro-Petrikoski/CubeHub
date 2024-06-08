import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronometroComponent } from './pages/cronometro/cronometro.component';
import { HomeComponent } from './pages/home/home.component';
import { TutoriaisComponent } from './pages/tutoriais/tutoriais.component';
import { TemposComponent } from './pages/tempos/tempos.component';
import { LojaComponent } from './pages/loja/loja.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cronometro', component: CronometroComponent },
      { path: 'tutoriais', component: TutoriaisComponent },
      { path: 'tempos', component: TemposComponent },
      { path: 'loja', component: LojaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
