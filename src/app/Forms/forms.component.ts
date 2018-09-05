import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forms',
    template: `
        <h2 class="text-center display-3">Forms</h2>
        <div class="row">
            <div class="col">
                <a class="btn btn-md btn-primary btn-block text-white" routerLink="ReactiveForms" routerLinkActive="active">Reactive Form validation</a>
            </div>        
            <div class="col">
                <a class="btn btn-md btn-info btn-block text-white" routerLink="BasicForms" routerLinkActive="active">Form validation</a>
            </div>
        </div>
        <router-outlet></router-outlet>

        `
})
export class FormsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
