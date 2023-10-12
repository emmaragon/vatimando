import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bond } from 'src/app/shared/models/bond';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {
  isLoading: false;
  searchControl: FormControl;
  selection = new SelectionModel<Bond>(true, []);
  constructor(private router: Router,) { }

  ngOnInit(): void {
    
  }

  openUserDialog(input?: any) {

  }
}
