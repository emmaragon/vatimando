import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class LayoutModule {}
