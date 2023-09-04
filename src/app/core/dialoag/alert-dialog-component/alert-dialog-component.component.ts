import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApprovalDialogConfig } from '../ApprovalDialogConfig';

@Component({
  selector: 'app-alert-dialog-component',
  templateUrl: './alert-dialog-component.component.html',
  styleUrls: ['./alert-dialog-component.component.scss'],
})
export class AlertDialogComponentComponent implements OnInit {
  btnAccept = 'OK';
  message: string;
  image: string;
  style = '';

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApprovalDialogConfig
  ) {
    this.message = data.message;
    if (data.image) {
      this.image =
        'https://media1.giphy.com/media/AFmZwgpOXOqWwtcVve/giphy.gif?cid=6c09b952uwqkkq4r7hurtsqc6j9cd2ooxnee4ls1ktrt7uxa&ep=v1_stickers_related&rid=giphy.gif&ct=s';
    } else {
      this.image =
        'https://media3.giphy.com/media/myqW4XYBkh0UOIIcCb/giphy.gif?cid=6c09b9524chqep7jj3o61zr9sta0wvnhzi33l1prgbh3sax1&ep=v1_stickers_related&rid=giphy.gif&ct=s';
    }

    console.log(this.image);
  }

  ngOnInit(): void {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
