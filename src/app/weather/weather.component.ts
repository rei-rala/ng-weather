import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class Weather implements OnInit {
  @Input() position: GeolocationPosition | undefined;
  @Output() notifyLocation: EventEmitter<string> = new EventEmitter();

  private _locationName: string = '';

  get locationName() {
    return this._locationName;
  }

  set locationName(text) {
    this._locationName = '' + text.trim();

    this.notifyLocation.emit(this._locationName)
  }

  ngOnInit(): void {
    console.log(this.position);
  }
}
