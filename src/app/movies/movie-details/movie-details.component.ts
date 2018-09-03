import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Object;

  constructor(private _movieService: MovieService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params.imdbID;

    this._movieService.getMovieDetails(id).subscribe(
      res => {
        console.log(res)
        this.movie = res
      },
      error => {
        console.log(error)
      }
    )
  }

}
