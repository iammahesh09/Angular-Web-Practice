import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forms',
    template: `
        <h2 class="text-center display-3">Forms</h2>
        <div class="row">
            <div class="col">
                <a class="btn btn-md btn-dark btn-block text-white" routerLink="ReactiveForms" routerLinkActive="active">Reactive Form validation</a>
            </div>        
            <div class="col">
                <a class="btn btn-md btn-dark btn-block text-white" routerLink="BasicForms" routerLinkActive="active">Basic Form validation</a>
            </div>
        </div>
        <router-outlet></router-outlet>

        `,
    styles: [
        `.active{  
            color: #fff !important;
            background-color: #007bff !important;
            border-color: #007bff !important;
            box-shadow:none !important;
        }`
    ]
})
export class FormsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
