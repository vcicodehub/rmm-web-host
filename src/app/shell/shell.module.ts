import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', 
    component: ShellComponent,
    children: [
      { path: 'shops', loadChildren: () => import('rmmShops/Module').then(m => m.ShopModule) },
      { path: 'supplies', loadChildren: () => import('rmmSupplies/Module').then(m => m.OrderManagementModule) }
    ]
  }
];

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShellModule { }
