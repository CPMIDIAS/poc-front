import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ResultData{
  reason: any;
  status: number;
}
@Component({
  selector: 'poc-dialogerror',
  templateUrl: './errordialog.component.html'
})
export class ErrorDialogComponent {
  title = 'Angular-Interceptor';
  constructor(@Inject(MAT_DIALOG_DATA) public data: ResultData) {}
}
