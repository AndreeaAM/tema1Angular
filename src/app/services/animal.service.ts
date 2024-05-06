import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animals = [
    { name: 'Akita', description: 'Powerful, dignified, friendly and devoted. Akitas are known for their loyalty and courage.', image: 'https://dogtime.com/wp-content/uploads/sites/12/2024/01/GettyImages-1262676579-1-e1706034743817.jpg', cost: 1200 },
    { name: 'Labrador Retriever', description: 'Friendly, outgoing, and high-spirited. Labs make excellent family companions and are also great working dogs.', image: 'https://dogtime.com/wp-content/uploads/sites/12/2023/09/GettyImages-1400138915.jpg', cost: 800 },
    { name: 'Poodle', description: 'Intelligent, active, and alert. Poodles are versatile dogs known for their curly hypoallergenic coats.', image: 'https://dogtime.com/wp-content/uploads/sites/12/2023/10/GettyImages-182178740-e1698160359332.jpg?w=1024', cost: 1500 },
    { name: 'German Shepherd', description: 'Confident, courageous, and smart. German Shepherds excel in various roles including police and service work.', image: 'https://dogtime.com/wp-content/uploads/sites/12/2023/08/GettyImages-1193376563.jpg?resize=2048,1363', cost: 1000 },
    { name: 'Border Collie', description: 'Highly intelligent, energetic, and agile. Border Collies excel in obedience and agility sports.', image: 'https://dogtime.com/wp-content/uploads/sites/12/2023/09/GettyImages-1316582288-e1694533636143.jpg?w=1024', cost: 1200 },
  
    { name: 'Persian Cat', description: 'Regal, calm, and elegant. Persians are known for their luxurious long coats and sweet personalities.', image: 'https://people.com/thmb/n6EdTmvAL3TkkAqrT47caD6tUu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(723x121:725x123)/wisp-the-cat-from-tiktok-092823-1-74797b02afe7475295e1478b2cdf2883.jpg', cost: 900 },
    { name: 'Siamese Cat', description: 'Social, vocal, and intelligent. Siamese cats are known for their striking blue eyes and sleek bodies.', image: 'https://www.catster.com/wp-content/uploads/2023/11/a-seal-point-siamese-cat-in-brown-background_Altsva_Shutterstock.jpg', cost: 1200 },
    { name: 'Maine Coon', description: 'Gentle, friendly, and adaptable. Maine Coons are one of the largest domesticated cat breeds.', image: 'https://www.zigly.com/media/mageplaza/blog/post/m/a/maine_coon_cat.png', cost: 1500 },
    { name: 'Scottish Fold', description: 'Sweet-natured, affectionate, and recognizable by their folded ears. Scottish Folds are charming companions.', image: 'https://www.mcleanvet.com/wp-content/uploads/sites/227/2022/03/scottish-fold-cat-owl.jpg', cost: 1800 },
    { name: 'Sphynx Cat', description: 'Curious, energetic, and distinctive for their hairless appearance. Sphynx cats are highly interactive.', image: 'https://www.vetstreet.com/wp-content/uploads/2022/09/Sphynx-4-645mk062211.jpg', cost: 2000 }
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
