import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private animalService: AnimalService) { }

  searchValue:string = '';
  searchResults: any[] = [];

  searchAnimals(): void {
    this.animalService.searchAnimals(this.searchValue).subscribe(animals => {
      console.log(animals); // Display matching animals in console
      // Assign animals to a component property to display in template
      this.searchResults = animals;
    });
  }
  
}
