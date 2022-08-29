import { Component, Input } from '@angular/core';

@Component({
  selector: 'notifier',
  template: `
    <div *ngIf="message" class="notifier">
      <div class="notifier_board">
        <h2 class="notifier_board-title">Alerta</h2>
        <b class="notifier_board-message">{{ message }}</b>
      </div>
    </div>
  `,
  styleUrls: ['./notifier.component.scss'],
})
export class Notifier {
  @Input() message: string | undefined;
}
