import { Component, input } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  gifs = input.required<Gif[]>();
}
