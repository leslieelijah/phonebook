import { Component, OnInit, Input } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { PhoneBookData } from './../../services/data.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {
  public addToPhonebookResponse: any;
  public fetchPhonebookResponse: any;
  public firstName: string;
  public surname: string;
  public companyOrRelationship: string;
  public phoneNumber: any;

  public phonebookDB: PhoneBookData[];
  public phonebookDb = new PhoneBookData();

  constructor(private phonebookService: PhonebookService, phonebookDB: PhoneBookData) { }

public fetchPhonebook() {
  this.phonebookService.getPhonebook().subscribe(
    fetchPhonebook => {
     this.fetchPhonebookResponse = fetchPhonebook.map( x => x);
      console.log(this.fetchPhonebookResponse);
      return this.fetchPhonebookResponse;
      },
      () => {},
      () => {}
  );

}
  public addToPhonebookPost() {
    this.phonebookService.addToPhonebook().subscribe(
      phonebook => {
        this.fetchPhonebook();
        // this.phonebookDB = phonebook;
        console.log(this.fetchPhonebook());
    //   this.firstName = this.phonebookDB.firstName;
    // this.surname = this.phonebookDB.surname;
    // this.companyOrRelationship = this.phonebookDB.companyOrRelationship;
    // this.phoneNumber = this.phonebookDB.phoneNumber;
    },
    () => {
      console.log('failing to subscribe to the data');
    },
    () => {});
  }


  onAddToPhonebook() {
    // console.log(this.phonebookDB.firstName);


  }

  onSubmit() {
    console.log(this.firstName);
  }
  ngOnInit() {
    // this.onAddToPhonebook();
    console.log(this.fetchPhonebookResponse);
   }

}
