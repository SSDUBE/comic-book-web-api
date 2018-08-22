import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from '../comics/comics.component';
import { ComicComponent } from '../comic/comic.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsComponent
  },
  {
    path: 'comic/:id',
    component: ComicComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
