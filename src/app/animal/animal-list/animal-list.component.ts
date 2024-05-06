import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animals: any[] = []; // Your list of animals
  toys: any[] = []; // Your list of toys
  currentIndex = 0;
  visibleAnimals: any[] = [];
  visibleToys: any[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(animals => {
      this.animals = animals;

      // Initialize visibleAnimals with the first subset of animals
      this.updateVisibleAnimals();
    });
    this.animalService.getToys().subscribe(toys => {
      this.toys = toys;
      this.updateVisibleToys();
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

  updateVisibleToys(): void {
    // Slice the toys array to get the next subset of toys
    this.visibleToys = this.toys.slice(this.currentIndex, this.currentIndex + 4);
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

  searchToys(searchTerm: string): void {
    if (searchTerm.trim()) {
      this.animalService.searchToys(searchTerm).subscribe(filteredToys => {
        this.visibleToys = filteredToys;
      });
    } else {
      this.updateVisibleToys(); // Reset to initial visible toys when search term is empty
    }
  }

  searchAll(searchTerm: string): void {
    if (searchTerm.trim()) {
      this.animalService.searchAll(searchTerm).subscribe(filteredItems => {
        this.visibleAnimals = filteredItems.filter(item => item.hasOwnProperty('cost'));
        this.visibleToys = filteredItems.filter(item => !item.hasOwnProperty('cost'));
      });
    } else {
      this.updateVisibleAnimals(); // Reset to initial visible animals when search term is empty
      this.updateVisibleToys(); // Reset to initial visible toys when search term is empty
    }
  }

  moveLeftToys(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateVisibleToys();
    }
  }

  moveRightToys(): void {
    if (this.currentIndex + 1 < this.animals.length) {
      this.currentIndex += 1;
      this.updateVisibleToys();
    }
  }
}
