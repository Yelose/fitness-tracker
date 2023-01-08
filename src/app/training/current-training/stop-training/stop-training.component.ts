import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  CurrentTrainingComponent,
  DialogData,
} from '../current-training.component';

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.scss'],
})
export class StopTrainingComponent {
  constructor(
    public dialogRef: MatDialogRef<CurrentTrainingComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: DialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
