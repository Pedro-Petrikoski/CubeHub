import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CronometroModule } from './pages/cronometro/cronometro.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './pages/home/home.module';
import { TutoriaisModule } from './pages/tutoriais/tutoriais.module';
import { TemposModule } from './pages/tempos/tempos.module';
import { LojaModule } from './pages/loja/loja.module';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

@NgModule({
  declarations: [AppComponent, BaseLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CronometroModule,
    HomeModule,
    TutoriaisModule,
    TemposModule,
    LojaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
