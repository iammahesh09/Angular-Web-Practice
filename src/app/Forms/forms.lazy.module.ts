import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
    {
        path: '', component: FormsComponent, children: [
            { path: '', redirectTo: 'ReactiveForms', pathMatch: 'full' },
            { path: 'ReactiveForms', component: ReactiveFormsComponent },
            { path: 'BasicForms', component: BasicFormComponent }
        ]
    }
]

@NgModule({
    declarations: [
        FormsComponent,
        BasicFormComponent,
        ReactiveFormsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class FormsLazyModule { }


