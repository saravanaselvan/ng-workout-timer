import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html'
})
export class ExercisesComponent implements OnInit {
  public workoutsForm: FormGroup;
  public showReview = false;
  public initialTimer: number;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.workoutsForm = this.fb.group({
      exercises: this.fb.array([this.fb.group({
        name: ['', [Validators.required]],
        duration: ['', [Validators.required]]
      })])
    });
  }

  get exerciseForms() {
    return this.workoutsForm.get('exercises') as FormArray;
  }

  addExercise() {
    this.exerciseForms.push(this.fb.group({
      name: [''],
      duration: ['']
    }));
  }

  review() {
    this.showReview = true;
  }

  startWorkout() {
    const start = 5;
    timer(1000, 1000)
    .pipe(
      map((i) => start - i),
      take(5)
    ).subscribe((val) =>  this.initialTimer = val );

    this.buildWorkoutObject();
  }

  buildWorkoutObject() {
    const workouts = [];
    this.exerciseForms.controls.forEach(element => {
      workouts.push({name: element.get('name').value, duration: element.get('duration').value});
    });


  }
}
