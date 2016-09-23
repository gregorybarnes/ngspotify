import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
  private searchUrl: string;

  constructor(private _http: Http){

  }

  searchMusic(str: string, type='artist'){
    //see Spotify API docs at https://developer.spotify.com/web-api/endpoint-reference
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl).map(res => res.json());
  }
}
