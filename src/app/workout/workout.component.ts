import { Component } from '@angular/core';

@Component({
  templateUrl: './workout.component.html'
})
export class WorkoutComponent {

  public showExercises = false;

  createWorkout() {
    this.showExercises = true;
  }
}
