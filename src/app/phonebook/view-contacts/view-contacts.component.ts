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
      this.phonebookService.viewPhonebookObservable().subscribe(
        response => {
          this.viewPhonebookResponse = response;
        },
        err => {},
        () => {}
      );
  }

  ngOnInit() {
    this.getPhonebookList();
  }

}
