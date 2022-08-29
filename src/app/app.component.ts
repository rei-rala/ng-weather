import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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

    navigator.geolocation.getCurrentPosition(successFn);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
