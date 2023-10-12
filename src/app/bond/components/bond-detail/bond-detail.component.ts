import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Bond } from 'src/app/shared/models/bond';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { MatDialog } from '@angular/material/dialog';
import { BondDetailService } from './bond-detail.service';
import { BondSelection } from 'src/app/shared/models/bond-selection';
import { Observable } from 'rxjs';
import { BondDetail } from 'src/app/shared/models/bond-detail';

@Component({
  selector: 'app-bond-detail',
  templateUrl: './bond-detail.component.html'
})
export class BondDetailComponent implements OnInit {
  currentBondCode: string;
  bondHoldersDetail: BondDetail[];
  currentHolder: string = 'PKBRBTP9022';
  holderForm1: FormGroup;
  holderForm2: FormGroup;
  holderForm3: FormGroup;
  bondObj: any;
  isLoading = false;
  isLast = false;
  id: number;
  totalHolders: number;

  bondDetail$: Observable<BondDetail[]>;
  
  constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute, private confirmSvc: ConfirmService, 
              private dialogo: MatDialog, private _bondService: BondDetailService) {
    this.bondObj = this.router.getCurrentNavigation()?.extras.state;
  }

  async ngOnInit() {
    this.initForms();
    //get cod_bond
    // console.log(this.bondObj);
    // this.currentBondCode = this.bondObj.code;
    // console.log('currentBondCode',this.currentBondCode);
    // this.holderForm1.reset({bondCode: this.currentBondCode});
    
    this.route.params.subscribe(params => {
      console.log(params['cod_bond'],params['id']);
      this.currentBondCode = params['cod_bond'];
      this.id = params['id'];
      });

    await this.getHolders();
    console.log('totalHolders: ', this.totalHolders);
  }
  
  initForms() {
    this.holderForm1 = this.fb.group({
      bondCode: new FormControl(this.currentBondCode, [
        Validators.required,
    ]),
    //   bondNumber: new FormControl('', [
    //     Validators.required,
    // ]),
      taxId: new FormControl('', [
        Validators.required,
    ]),
      clientNumber: new FormControl('', [
        Validators.required,
    ]),
      businessName: new FormControl('', [
        Validators.required,
    ]),
      holderName: new FormControl('', [
        Validators.required,
    ]),
      holderLastName: new FormControl('', [
        Validators.required,
    ]),
      phoneNumber: new FormControl('', [
        Validators.required,
    ]),
      email: new FormControl('', [
        Validators.required,
    ]),
      holderId: new FormControl('', [
        Validators.required,
    ]),
      date: new FormControl('', []), 
    });
    this.holderForm2 = this.fb.group({
      bondCode: new FormControl(this.currentBondCode, [
        Validators.required,
    ]),
    //   bondNumber: new FormControl('', [
    //     Validators.required,
    // ]),
      taxId: new FormControl('', [
        Validators.required,
    ]),
      clientNumber: new FormControl('', [
        Validators.required,
    ]),
      businessName: new FormControl('', [
        Validators.required,
    ]),
      holderName: new FormControl('', [
        Validators.required,
    ]),
      holderLastName: new FormControl('', [
        Validators.required,
    ]),
      phoneNumber: new FormControl('', [
        Validators.required,
    ]),
      email: new FormControl('', [
        Validators.required,
    ]),
      holderId: new FormControl('', [
        Validators.required,
    ]),
      date: new FormControl('', []), 
    });
    this.holderForm3 = this.fb.group({
      bondCode: new FormControl(this.currentBondCode, [
        Validators.required,
    ]),
    //   bondNumber: new FormControl('', [
    //     Validators.required,
    // ]),
      taxId: new FormControl('', [
        Validators.required,
    ]),
      clientNumber: new FormControl('', [
        Validators.required,
    ]),
      businessName: new FormControl('', [
        Validators.required,
    ]),
      holderName: new FormControl('', [
        Validators.required,
    ]),
      holderLastName: new FormControl('', [
        Validators.required,
    ]),
      phoneNumber: new FormControl('', [
        Validators.required,
    ]),
      email: new FormControl('', [
        Validators.required,
    ]),
      holderId: new FormControl('', [
        Validators.required,
    ]),
      date: new FormControl('', []), 
    });
  }

  getHolders() {
    return new Promise((resolve,reject) => {
      this._bondService.getHoldersById(this.id.toString()).subscribe({
        next: (data) => {
          this.bondHoldersDetail = data;
          this.totalHolders = this.bondHoldersDetail.length;
          if (this.totalHolders > 0) {
            this.setFormValues();
          }
          else {
            this.holderForm1.patchValue({
              bondCode: this.currentBondCode,
            });
            this.holderForm2.patchValue({
              bondCode: this.currentBondCode,
            });
            this.holderForm3.patchValue({
              bondCode: this.currentBondCode,
            });
          }
          resolve(data);
        },
        error: (error) => {
          reject(error);
        },
      })
    });
  }
  get holder1() {
    return this.holderForm1.controls;
  }
  get holder2() {
    return this.holderForm2.controls;
  }
  get holder3() {
    return this.holderForm3.controls;
  }

  setFormValues() {
    if (this.bondHoldersDetail.length >= 1) {
      this.holderForm1.setValue({
        bondCode: this.currentBondCode,
        // bondNumber: this.bondHoldersDetail[0].bondNumber,
        taxId: this.bondHoldersDetail[0].taxId,
        clientNumber: this.bondHoldersDetail[0].clientNumber,
        businessName: this.bondHoldersDetail[0].businessName,
        holderName: this.bondHoldersDetail[0].holderName,
        holderLastName: this.bondHoldersDetail[0].holderLastName,
        phoneNumber: this.bondHoldersDetail[0].phoneNumber,
        email: this.bondHoldersDetail[0].email,
        holderId: this.bondHoldersDetail[0].holderId,
        date: this.bondHoldersDetail[0].date
      });
    }
    if (this.bondHoldersDetail.length >= 2) {
      this.holderForm2.setValue({
        bondCode: this.currentBondCode,
        // bondNumber: this.bondHoldersDetail[1].bondNumber,
        taxId: this.bondHoldersDetail[1].taxId,
        clientNumber: this.bondHoldersDetail[1].clientNumber,
        businessName: this.bondHoldersDetail[1].businessName,
        holderName: this.bondHoldersDetail[1].holderName,
        holderLastName: this.bondHoldersDetail[1].holderLastName,
        phoneNumber: this.bondHoldersDetail[1].phoneNumber,
        email: this.bondHoldersDetail[1].email,
        holderId: this.bondHoldersDetail[1].holderId,
        date: this.bondHoldersDetail[1].date
      });
    }
    if (this.bondHoldersDetail.length <= 3) {
      this.holderForm3.setValue({
        bondCode: this.currentBondCode,
        // bondNumber: this.bondHoldersDetail[2].bondNumber,
        taxId: this.bondHoldersDetail[2].taxId,
        clientNumber: this.bondHoldersDetail[2].clientNumber,
        businessName: this.bondHoldersDetail[2].businessName,
        holderName: this.bondHoldersDetail[2].holderName,
        holderLastName: this.bondHoldersDetail[2].holderLastName,
        phoneNumber: this.bondHoldersDetail[2].phoneNumber,
        email: this.bondHoldersDetail[2].email,
        holderId: this.bondHoldersDetail[2].holderId,
        date: this.bondHoldersDetail[2].date
      })
    }
  }
  
  save() {

    if (this.holderForm1.invalid) {
      this.confirmSvc.show('El formulario tiene errores de validación','');
      this.dialogo.open.arguments.message = "Are you sure you want to delete?"
      return;
    }
    else {
      this.confirmSvc.show('Mensaje de confirmación','¿Está seguro que quiere enviar la información?');
      this.dialogo.open.arguments.message = "Are you sure you want to delete?"
      return;
    }

    this.isLoading = true;

    // const save$ = this.account
    //   ? this.accountSvc.update(this.account.id, this.accountForm.value)
    //   : this.accountSvc.add(this.accountForm.value);

    // save$
    //   .pipe(
    //     finalize(() => (this.isLoading = false)),
    //     tap(() => {
    //       this.toastr.success("Se guardó el distribuidor correctamente.");
    //       this.dialogRef.close(true);
    //     }),
    //     catchError((xhr: HttpErrorResponse) => {
    //       this.toastr.error("Hubo un error.");
    //       return of(null);
    //     })
    //   )
    //   .subscribe();
  }

  send() {
  }
  
  onClick() {
    this.router.navigate(['bonds/bond-list']);
  }

  onAdd() {
  }

  // onNext() {
  //   this.currentHolder += 1;
  // }
  
  // onPrev() {
  //   this.currentHolder -= 1;
  // }

  onClean() {
  }
}
