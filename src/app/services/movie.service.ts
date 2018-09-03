import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  OMDB_Url: string = "http://www.omdbapi.com/?apikey=";
  API_Key: string = "72540e98";

  constructor(private _http: HttpClient) { }

  getMovie(search, year) {
    //return this._http.get(this.OMDB_Url + "?s=" + search + "&" + this.API_Key);
    return this._http.get(this.OMDB_Url + this.API_Key + "&s=" + search + "&y=" + year)
  }

  getMovieDetails(id) {
    console.log(this.OMDB_Url + "?i=" + id + "&" + this.API_Key)
    return this._http.get(this.OMDB_Url + this.API_Key + "&i=" + id)
  }


}
