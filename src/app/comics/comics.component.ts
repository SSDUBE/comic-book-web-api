import { Component, OnInit } from '@angular/core';
import { ComicsDataService } from '../comics-data.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: any = [];
  allComics: any = [];
  filter: string = '';

  constructor(private comicsDataService: ComicsDataService) { }

  ngOnInit() {
    this.comicsDataService.getComics().subscribe((comics: any) => {
      this.allComics = comics.data.results;
      this.comics = this.allComics;
    });
  }

  search() {
    this.filter = this.filter.toLocaleLowerCase().trim();
    this.comics = this.allComics.filter(c => c.title.toLocaleLowerCase().includes(this.filter));
  }

}
