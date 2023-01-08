import { OnInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ExerciseModel } from '../exercise.model';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
  trainingExercises: ExerciseModel[] = [];

  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.db
      .collection('availableExercises')
      .valueChanges()
      .subscribe((result) => {
        console.log(result);
      });
  }
  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
