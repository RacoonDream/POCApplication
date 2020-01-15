import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // originalUserSettings: UserSettings = {
  //   name: 'Milku',
  //   emailOffers: true,
  //   interfaceStyle: 'dark',
  //   subscriptionType: 'Annual',
  //   notes: 'some notes'

  // };
   originalUserSettings: UserSettings = {
    name: null,
    emailOffers:  null,
    interfaceStyle:  null,
    subscriptionType:  null,
    notes:  null,

  };
  userSettings: UserSettings = {... this.originalUserSettings};
  constructor() { }

  ngOnInit() {
  }

}
