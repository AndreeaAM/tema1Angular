import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent {

  @Input() animal: any;
  @Output() orderAnimalEvent: EventEmitter<string> = new EventEmitter<string>();

  orderAnimal(animalName: string) {
    // Emit the ordered animal name to the parent component
    this.orderAnimalEvent.emit(animalName);
    console.log(`Ordered animal: ${animalName}`);
  }

  orderToy(toyName: string) {
    this.orderAnimalEvent.emit(toyName);
    console.log(`Ordered toy: ${toyName}`);
  }


}
