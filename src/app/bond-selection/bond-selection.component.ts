import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { catchError, filter, finalize, switchMap, tap } from "rxjs/operators";
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { BondSelection } from '../shared/models/bond-selection';
import { ConfirmService } from '../shared/services/confirm.service';
import { BondSelectionService } from './bond-selection.service';

@Component({
  selector: 'app-bond-selection',
  templateUrl: './bond-selection.component.html'
})
export class BondSelectionComponent implements OnInit {
  bonds: BondSelection[];
  bonds$: Observable<BondSelection[]>;
  selectedBond: BondSelection;

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private router: Router,
              private _bondService: BondSelectionService,
              private _changeDetectorRef: ChangeDetectorRef,
              private confirmSvc: ConfirmService,
              private toastr: ToastrService,
              public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.bonds$ = this._bondService.getBonds("20606512946");
    // this.bonds = this.bondselection;
  }

  onSave() {
    if (!this.selectedBond) {
      this.confirmSvc.show('Seleccionar un número de Bono','');
      this.dialogo.open.arguments.message = "Are you sure you want to delete?"
      // this.dialogo.afterClosed();
    }
    else {
      this.router.navigate(['bonds/bond-detail', this.selectedBond.code, this.selectedBond.id]);
      // this.router.navigateByUrl('/bonds/bond-detail', { state: { id:this.selectedBond.id , code:this.selectedBond.code } });
    }
    //this.dialogRef.close();
  }
}
