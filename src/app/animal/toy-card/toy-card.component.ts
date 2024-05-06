import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toy-card',
  templateUrl: './toy-card.component.html',
  styleUrls: ['./toy-card.component.scss']
})
export class ToyCardComponent {
orderToy(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() toy: any;
}
