import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toy-card',
  templateUrl: './toy-card.component.html',
  styleUrls: ['./toy-card.component.scss']
})
export class ToyCardComponent {

  @Input() toy: any;
  @Output() orderAnimalEvent: EventEmitter<string> = new EventEmitter<string>();

  orderToy(animalName: string) {
    // Emit the ordered animal name to the parent component
    this.orderAnimalEvent.emit(animalName);
    console.log(`Ordered animal: ${animalName}`);
  }
}
