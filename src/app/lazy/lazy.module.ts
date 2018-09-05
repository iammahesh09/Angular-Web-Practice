import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneComponent } from './lazy-one/lazy-one.component';
import { LazyTwoComponent } from './lazy-two/lazy-two.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'LazyOne', component: LazyOneComponent },
  { path: 'LazyTwo', component: LazyTwoComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyOneComponent, LazyTwoComponent]
})
export class LazyModule { }
