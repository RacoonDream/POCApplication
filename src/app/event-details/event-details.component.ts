import { Observable } from 'rxjs';
import { DataService } from './../data/data.service';
import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {


  eventObject: UserSettings = {
    name: null,
    emailOffers:  null,
    interfaceStyle:  null,
    subscriptionType:  null,
    notes:  null,

  };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  singleModel = 'On';
  startDate: Date;
  rate = 5;
  isReadOnly = false;
  max = 10;
  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.subscriptionTypes = this.dataService.getSubscriptionType();
   this.startDate = new Date();
  }
 onSubmit(form: NgForm) {
   console.log('in onSubmit:', form.value);
  //  if (form.valid) {
  //   this.dataService.postUserSettingsForm(this.eventObject).subscribe(// get observable to work using subscribe
  //     result => console.log('success: ', result),
  //     error => this.onHttpError(error)
  //   );
  //  } else {
  //    this.postError = true;
  //    console.log('form not submitted as it is invalid');
  //  }

 }
  onHttpError(errorResponse: any) {
   console.log('error: ', errorResponse.error);
   this.postError = true;
   this.postErrorMessage = errorResponse.error.errorMessage;
    }
 onBlur(field: NgModel) {
   console.log('in onBlur:', field.valid);
 }
}
