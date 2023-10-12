import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bond } from 'src/app/shared/models/bond';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bond-list',
  templateUrl: './bond-list.component.html'
})
export class BondListComponent implements OnInit {
  projects = new FormControl('');
  projectList: string[] = ['CDD BASED REPORTING', 'HORIZON DATA - PERÚ', 'DYNAMIC PRICING GBT 2.0'];

  displayedColumns = [
    "select",
    "jobname",
    "schedtable",
    "application",
    "orderId",
    "errorType",
    "domain",
    "project",
    "errorCause",
    "measure",
    "actions"
  ];

  BONDS_DATA: Bond[] = [
    {jobname: 'PKBRBTP9022', schedtable: 'CR-PEMFITMP-T29', application: '', orderId: '4haif', errorType: 'Path does not exist', domain: 'DAT', project: 'CDD BASED REPORTING', errorCause: '', measure:'', type: 'Temporal'},
    {jobname: 'PMOLCP9004', schedtable: 'CR-PEMFITMP-T31', application: '', orderId: '4jpnv3', errorType: 'Permisos ACL', domain: 'ENG', project: 'HORIZON DATA - PERÚ', errorCause: '', measure:'', type: 'Temporal'},
    {jobname: 'PDEOTP9907', schedtable: 'CR-PEFANTMP-T01', application: '', orderId: '4kw3a', errorType: '(3.1) Valida Nulos en el campo', domain: 'FIN', project: 'DYNAMIC PRICING GBT 2.0', errorCause: '', measure:'', type: 'Temporal'},
    {jobname: 'PLMABTP9002', schedtable: 'CR-PELMAMEN-T02', application: '', orderId: '4haif', errorType: 'Path does not exist', domain: 'DAT', project: 'CDD BASED REPORTING', errorCause: '', measure:'', type: 'No Inventariado'},
    {jobname: 'PKMDCP9003', schedtable: 'CR-PKMMDIA-T01', application: '', orderId: '4jpnv3', errorType: 'Permisos ACL', domain: 'ENG', project: 'HORIZON DATA - PERÚ', errorCause: '', measure:'', type: 'No Inventariado'},
    {jobname: 'PDEOTP9217', schedtable: 'CR-PDEOMEN-T05', application: '', orderId: '4kw3a', errorType: '(3.1) Valida Nulos en el campo', domain: 'FIN', project: 'DYNAMIC PRICING GBT 2.0', errorCause: '', measure:'', type: 'Proyectos'}
  ];
  dataSource = new MatTableDataSource<Bond>(this.BONDS_DATA);
  isLoading: false;
  searchControl: FormControl;
  selection = new SelectionModel<Bond>(true, []);

  types: Type[] = [
    {value: 'No Inventariado', viewValue: 'No Inventariado'},
    {value: 'Temporal', viewValue: 'Temporal'},
    {value: 'Proyectos', viewValue: 'Proyectos'},
  ];

  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Bond>(this.BONDS_DATA);
  }

  openUserDialog(input?: any) {

  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  onEdit(bond: any) {
    this.router.navigate(['bonds/bond-detail', bond, 1]);
  }

  applyFilter(event: any) {
    this.dataSource.filter = event.source.value.trim().toLowerCase();
  }
  
  multipleFilter(event: any) {
    
  }
}
