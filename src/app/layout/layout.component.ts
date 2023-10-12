import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BondSelectionComponent } from '../bond-selection/bond-selection.component';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
})

export class LayoutComponent implements OnInit {
  searchControl: FormControl;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    //this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BondSelectionComponent, {
      width: '30%',
      panelClass: ["relative"],
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
