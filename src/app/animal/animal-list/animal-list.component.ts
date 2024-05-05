import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animals: any[] = []; // Your list of animals
  currentIndex = 0;
  visibleAnimals: any[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(animals => {
      this.animals = animals;

      // Initialize visibleAnimals with the first subset of animals
      this.updateVisibleAnimals();
    });
  }

  moveLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateVisibleAnimals();
    }
  }

  moveRight(): void {
    if (this.currentIndex + 1 < this.animals.length) {
      this.currentIndex += 1;
      this.updateVisibleAnimals();
    }
  }

  updateVisibleAnimals(): void {
    // Slice the animals array to get the next subset of animals
    this.visibleAnimals = this.animals.slice(this.currentIndex, this.currentIndex + 4);
  }

  searchAnimals(searchTerm: string): void {
    if (searchTerm.trim()) {
      this.animalService.searchAnimals(searchTerm).subscribe(filteredAnimals => {
        this.visibleAnimals = filteredAnimals;
      });
    } else {
      this.updateVisibleAnimals(); // Reset to initial visible animals when search term is empty
    }
  }

  
  searchResults: any[] = [];

  searchAnimal(searchTerm: string): void {
    if (searchTerm.trim()) {
      this.animalService.searchAnimals(searchTerm).subscribe(filteredAnimals => {
        this.searchResults = filteredAnimals;
        if (this.searchResults.length > 0) {
          this.visibleAnimals = this.searchResults;
        } else {
          this.updateVisibleAnimals();
        }
      });
    } else {
      this.updateVisibleAnimals(); // Reset to initial visible animals when search term is empty
    }
  }
}
