import { Component, Input } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {

  @Input()
  message!: string;

  @Input()
  title!: string;

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  confirm() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }

}
