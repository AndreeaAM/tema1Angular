import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { RouterModule } from '@angular/router';
import { ToyCardComponent } from './toy-card/toy-card.component';


@NgModule({
  declarations: [
    AnimalListComponent,
    AnimalCardComponent,
    ToyCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AnimalListComponent },
      { path: 'animal/:id', component: AnimalCardComponent }
    ])
  ]
})
export class AnimalModule { }
