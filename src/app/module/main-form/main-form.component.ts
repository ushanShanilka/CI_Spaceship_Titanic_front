import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApprovalDialogConfig } from '../../core/dialoag/ApprovalDialogConfig';
import { FormService } from '../service/form.service';
import { AlertDialogComponentComponent } from '../../core/dialoag/alert-dialog-component/alert-dialog-component.component';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  detailForm!: FormGroup;

  sex: string[] = ['Male', 'Female'];

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.detailForm = this.formBuilder.group({
      homePlanet: ['', Validators.required],
      cryosleep: ['', Validators.required],
      destination: ['', Validators.required],
      age: ['', Validators.required],
      VIP: ['', Validators.required],
      roomService: ['', Validators.required],
      foodCourt: ['', Validators.required],
      shoppingMall: ['', Validators.required],
      spa: ['', Validators.required],
      VRDeck: ['', Validators.required],
    });
  }

  submit() {
    if (this.detailForm.valid) {
      let embarked = this.detailForm.get('pEmbarked')?.value;
      let sex = this.detailForm.get('sex')?.value;
      this.formService
        .predict({
          data: [
            String(this.detailForm.get('homePlanet')?.value),
            String(this.detailForm.get('cryosleep')?.value),
            String(this.detailForm.get('destination')?.value),
            String(this.detailForm.get('VIP')?.value),
            String(this.detailForm.get('age')?.value),
            String(this.detailForm.get('roomService')?.value),
            String(this.detailForm.get('foodCourt')?.value),
            String(this.detailForm.get('shoppingMall')?.value),
            String(this.detailForm.get('spa')?.value),
            String(this.detailForm.get('VRDeck')?.value),
          ],
        })
        .subscribe((res) => {
          this.dialog
            .open(AlertDialogComponentComponent, {
              width: '350px',
              data: new ApprovalDialogConfig(
                res == 1 ? 'Passenger Transported' : 'Passenger Not-Transported',
                res == 1
              ),
            })
            .afterClosed()
            .subscribe((res) => {
              this.detailForm.reset();
            });
        });
    }
  }
}
