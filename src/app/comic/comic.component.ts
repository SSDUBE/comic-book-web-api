import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ComicsDataService } from '../comics-data.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comicId: any;
  comic: any = {};
  creators: any = []

  constructor(private route: ActivatedRoute, private data: ComicsDataService) { 
    this.route.params.subscribe(params => this.comicId = parseInt(params.id));
  }

  ngOnInit() {
    this.data.getComics().subscribe((comics: any) => {
      this.comic = comics.data.results.filter(comic => comic.id == this.comicId)[0];
      this.creators = this.comic.creators.items;
    })
  }

}
