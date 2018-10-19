import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {
public viewPhonebookResponse: any;
  constructor(private phonebookService: PhonebookService) { }

  public getPhonebookList() {
      this.phonebookService.viewPhonebook().subscribe(
        data => {
          this.viewPhonebookResponse = data;
          console.log(this.viewPhonebookResponse);
        },
        () => {
          console.log('Failing to get the data');
        }
      );
  }

  ngOnInit() {
    this.getPhonebookList();
  }

}
