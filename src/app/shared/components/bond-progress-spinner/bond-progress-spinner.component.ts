import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-bond-progress-spinner',
  templateUrl: './bond-progress-spinner.component.html',
  styleUrls: ['./bond-progress-spinner.component.scss']
})
export class BondProgressSpinnerComponent {
  @Input()
  valueIn: number = 33;
  
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = this.valueIn;
}
