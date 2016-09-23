import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [SpotifyService]
})
export class SearchComponent {
  searchStr: string;

  constructor(private _spotifyService: SpotifyService){

  }

  searchMusic(){
    //console.log('Test --searchMusic() function works!');
    //console.log(this.searchStr);
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res.artists.items);
      })
  }
}
