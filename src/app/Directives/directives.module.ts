import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RedBlackDirective } from './Custom/red-black.directive';
import { ItemsComponent } from '../Directives/items/items.component';

const routes: Routes = [
  { path: '', component: ItemsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RedBlackDirective,
    ItemsComponent
  ]
})

export class DirectivesLazyModule { }
