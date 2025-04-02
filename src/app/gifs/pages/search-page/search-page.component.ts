import { GifsService } from './../../services/gifs.service';
import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifsService.searchGifsWithQuery(query).subscribe((res) => {
      this.gifs.set(res);
    });
  }
}
