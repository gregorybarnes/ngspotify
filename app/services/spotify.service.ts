import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import id = webdriver.By.id;

@Injectable()
export class SpotifyService{
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;

  constructor(private _http: Http){

  }

  searchMusic(str: string, type='artist'){
    //see Spotify API docs at https://developer.spotify.com/web-api/endpoint-reference
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl).map(res => res.json());
  }

  getArtist(id: string){
    //see Spotify API docs at https://developer.spotify.com/web-api/endpoint-reference
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl).map(res => res.json());
  }

  getAlbums(artistId: string){
    //see Spotify API docs at https://developer.spotify.com/web-api/endpoint-reference
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    return this._http.get(this.albumsUrl).map(res => res.json());
  }
}
