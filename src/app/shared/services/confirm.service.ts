import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { SharedModule } from '../shared.module';
import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: SharedModule
})
export class ConfirmService {

  constructor(private dialog: MatDialog) { }

  private dialogRef: MatDialogRef<ConfirmDialogComponent, boolean>;

  show(
    title = "Confirmación",
    message = "¿Está seguro de realizar la acción?"
  ) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();
  }

  hide() {
    if (this.dialogRef) {
      this.dialogRef.close(false);
    }
  }
}
