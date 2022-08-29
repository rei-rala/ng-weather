import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class Weather implements OnInit {
  @Input() position: GeolocationPosition | undefined;

  ngOnInit(): void {
    console.log(this.position)
  }
}
