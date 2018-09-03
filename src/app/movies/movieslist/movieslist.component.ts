import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

  movies: Object;
  constructor(private _moviesService: MovieService) { }

  ngOnInit() {
  }

  searchMovie(search, year) {
    console.log(search)
    console.log(year)

    this._moviesService.getMovie(search, year).subscribe(
      res => {
        console.log(res['Search'])
        this.movies = res['Search'];
      },
      error => {
        console.log(error)
      }
    )
  }

}
