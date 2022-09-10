import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getWeatherFromLocation } from 'src/services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnChanges {
  title = 'NG-WEATHER';

  public posString: string = '';
  private _position: GeolocationPosition | null = null;
  get position(): GeolocationPosition | null {
    return this._position;
  }
  set position(pos: GeolocationPosition | null) {
    this._position = pos;
  }

  ngOnInit(): void {
    const successFn = (pos: GeolocationPosition) => {
      this.position = pos;
    };

    Promise.resolve(navigator.geolocation.getCurrentPosition(successFn))
      .then(
        () =>
          new Promise((res, rej) => {
            if (this.position) res(getWeatherFromLocation(this.position));

            rej('No location');
          })
      )

      .then(console.log)
      .catch(console.warn);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
