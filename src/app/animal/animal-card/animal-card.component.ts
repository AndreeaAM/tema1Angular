import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent {

  @Input() animal: any;

  orderAnimal(animalName: string) {
    // Implement this method to handle ordering of the selected animal
  }

}
