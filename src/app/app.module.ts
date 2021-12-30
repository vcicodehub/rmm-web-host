import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SrsUserLibModule } from 'srs-user-lib';


const routes: Routes = [
  { path: 'shell', loadChildren: () => import('./shell/shell.module').then(m => m.ShellModule) },
  { path: '',  redirectTo: '/shell', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    SrsUserLibModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
