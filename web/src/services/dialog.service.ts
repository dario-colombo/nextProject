import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DialogMessageFormat } from './../frontendcommons/models/dialogmessageformat';


@Injectable()

export class DialogService {
  constructor(public snackBar: MatSnackBar) { }

  showDialog(message: DialogMessageFormat) {
    this.snackBar.open(
      message.title + '´\n\r' + message.message, message.okButtonText,
      {
        duration: 4000,
      });
  }
}
