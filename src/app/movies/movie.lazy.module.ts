import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { MovieslistComponent } from "./movieslist/movieslist.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
    { path: '', component: MovieslistComponent },
    { path: 'movies/:imdbID', component: MovieDetailsComponent },
]

@NgModule({
    declarations: [
        MovieslistComponent,
        MovieDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [],
})
export class MovieLazyModule { }
