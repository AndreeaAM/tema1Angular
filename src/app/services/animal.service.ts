import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

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

  private toys = [
    { name: 'Interactive Treat Dispenser', description: 'A fun toy that dispenses treats when your pet plays with it, encouraging mental stimulation and activity.', image: 'https://m.media-amazon.com/images/I/61eIVcQ5CxL.jpg', cost: 20 },
  { name: 'Chew Toy Assortment Pack', description: 'A variety pack of durable chew toys made from safe materials to satisfy your pet\'s chewing instincts.', image: 'https://i5.walmartimages.com/asr/2b304b9a-c608-4b66-8f38-984224b98192.507f5b0abaf094f9a1f29b3919ecde76.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', cost: 15 },
  { name: 'Feather Teaser Wand', description: 'A wand with feathers attached that mimics bird-like movements, perfect for engaging your cat in play.', image: 'https://m.media-amazon.com/images/I/51Ey6I9oAoL._AC_.jpg', cost: 10 },
  { name: 'Interactive Laser Pointer Toy', description: 'A toy that projects a laser beam for your cat or dog to chase, providing hours of interactive fun.', image: 'https://m.media-amazon.com/images/I/614e6FybgjL.jpg', cost: 12 },
  { name: 'Plush Squeaky Toy Set', description: 'A set of adorable plush toys that squeak when squeezed, suitable for dogs who enjoy soft toys.', image: 'https://m.media-amazon.com/images/I/71qwqQENyHL._AC_UF1000,1000_QL80_DpWeblab_.jpg', cost: 18 },
  { name: 'Tunnel Play Tube for Cats', description: 'A collapsible tunnel with peek-a-boo holes that cats can run through, hide in, and explore.', image: 'https://i5.walmartimages.com/seo/Collapsible-Cat-Tunnel-Interactive-Play-Tube-for-Cats-Kittens-Rabbits-Pets-With-Ball-Toy-and-Peep-Hole-for-Exercise-Hiding-Napping-by-PETMAKER_a72632a5-ba26-46e2-a52e-069a236dc0e5_1.dd7d172679729fd78518aaff6dd7c036.jpeg', cost: 25 },
  { name: 'Treat Puzzle Ball', description: 'A puzzle ball that dispenses treats as your pet rolls and plays with it, promoting mental stimulation and problem-solving.', image: 'https://m.media-amazon.com/images/I/71wVBZiD4nL.jpg', cost: 15 }
  ]

  private orderedItemSubject = new BehaviorSubject<any>(null);
  orderedItem$ = this.orderedItemSubject.asObservable();

  constructor() { }

  getAnimals(): Observable<any[]> {
    return of(this.animals);
  }
  getToys(): Observable<any[]> {
    return of(this.toys);
  }
  searchAnimals(searchTerm: string): Observable<any[]> {
    const filteredAnimals = this.animals.filter(animal =>
      animal.name.toLowerCase() === searchTerm.toLowerCase()
    );
    return of(filteredAnimals);
  }

  searchToys(searchTerm: string): Observable<any[]> {
    const filteredToys = this.toys.filter(toy =>
      toy.name.toLowerCase() === searchTerm.toLowerCase()
    );
    return of(filteredToys);
  }

  searchAll(searchTerm: string): Observable<any[]> {
    const filteredItems = this.animals.concat(this.toys).filter(item =>
      item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    return of(filteredItems);
  }

  orderItem(item: any): void {
    this.orderedItemSubject.next(item);
  }
}
