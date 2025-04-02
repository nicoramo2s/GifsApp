import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";

@Component({
  selector: 'app-gifs-history',
  imports: [GifsListComponent],
  templateUrl: './gifs-history.component.html',
})
export default class GifsHistoryComponent {
  gifsService = inject(GifsService);
  /**
   * Una señal reactiva que extrae el parámetro 'query' de los parámetros de la ruta.
   * Utiliza `ActivatedRoute` de Angular para acceder a los parámetros de la ruta y
   * mapea el parámetro 'query' a una señal para su uso reactivo en el componente.
   *
   * @remarks
   * Esta señal permite que el componente responda de manera reactiva a los cambios
   * en el parámetro 'query' de la ruta.
   *
   * @see {@link ActivatedRoute}
   * @see {@link toSignal}
   */
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifsService.getHistoryGifs(this.query());
  });
}
