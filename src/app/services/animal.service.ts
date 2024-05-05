import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animals = [
    { name: 'Dog', description: 'Man\'s best friend' },
    { name: 'Cat', description: 'Independent and curious' },
    { name: 'Fish', description: 'Colorful aquatic creatures' },
    { name: 'Dog', description: 'Man\'s best friend' },
    { name: 'Cat', description: 'Independent and curious' },
    { name: 'Fish', description: 'Colorful aquatic creatures' },
    { name: 'Dog', description: 'Man\'s best friend' },
    { name: 'Cat', description: 'Independent and curious' },
    { name: 'Fish', description: 'Colorful aquatic creatures' }
  ];

  constructor() { }

  getAnimals(): Observable<any[]> {
    return of(this.animals);
  }

  searchAnimals(searchTerm: string): Observable<any[]> {
    const filteredAnimals = this.animals.filter(animal =>
      animal.name.toLowerCase() === searchTerm.toLowerCase()
    );
    return of(filteredAnimals);
  }
}
