import { Injectable } from '@angular/core';

import { DialogMessageFormat } from './../frontendcommons/models/dialogmessageformat';

@Injectable()
export class DialogService {
  showDialog(message: DialogMessageFormat) {
       alert(message);
    }

  }

