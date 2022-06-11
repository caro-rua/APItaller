import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Rick and Morty App Carolina Taborda';
  public characters : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;

  constructor(private characterService : CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  } 

  getCharacters(page : number = 1, name : string = "") {
    this.characterService.characters(page, name).subscribe(response => {
      this.characters = response.results
      this.info = response.info;
      this.pages = Array(this.info.pages).map((x,i)=>i);
    })
  }

  search(event: any, n: number) {
    this.currentPage = n + 1;
    this.getCharacters(this.currentPage, this.q);
  }
}