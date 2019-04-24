import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises/exercises.component';
import { WorkoutComponent } from './workout.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    WorkoutComponent,
    ExercisesComponent
  ],
  exports: [
    WorkoutComponent,
    ExercisesComponent
  ]
})
export class WorkoutModule {

}
