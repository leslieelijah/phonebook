import { Component, OnInit, Input } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { PhoneBookDBService } from './../../services/phonebookdb.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {
  public addToPhonebookResponse: any;
  public fetchPhonebookResponse: any;

  public firstName: any;
  public surname: any;
  public companyOrRelationship: any ;
  public phoneNumber: any;

  constructor(private phonebookService: PhonebookService, private phoneBooks: PhoneBookDBService) {
    // this.firstName = this.phoneBooks.firstName;
    // this.surname = this.phoneBooks.surname;
    // this.phoneNumber = this.phoneBooks.phoneNumber;
    // this.companyOrRelationship = this.phoneBooks.companyOrRelationship;
   }

  onAddToPhonebook(firstname, surname, company, phonenumber) {
    // this.firstName = firstname;
    // surname = this.phoneBooks.surname;
    // phonenumber = this.phoneBooks.phoneNumber;
    // company = this.phoneBooks.companyOrRelationship;
    // console.log(this.firstName);
    setTimeout(() => {
      this.phonebookService.addToPhonebook(this.firstName, this.surname, this.companyOrRelationship, this.phoneNumber);
    }, 1000);

  }

  ngOnInit() {}

}
