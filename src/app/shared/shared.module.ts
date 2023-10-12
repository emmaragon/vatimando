import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ButtonLoaderComponent } from "./components/button-loader/button-loader.component";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BondProgressSpinnerComponent } from './components/bond-progress-spinner/bond-progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY",
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@NgModule({
  declarations: [
    ButtonLoaderComponent,
    LoaderComponent,
    ConfirmDialogComponent,
    BondProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BondProgressSpinnerComponent,
    ButtonLoaderComponent,
    ConfirmDialogComponent,
  ],
})
export class SharedModule { }
