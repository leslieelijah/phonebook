import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../services/phonebook.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {
  public addToPhonebookResponse: any;
  constructor(private phonebookService: PhonebookService) { }

  public addToPhonebookPost() {
    this.phonebookService.addToPhonebook().subscribe(data => {
      this.addToPhonebookResponse = data;
      console.log(this.addToPhonebookResponse);
    },
    () => {
      console.log('failing to subscribe to the data');
    },
    () => {});
  }
  ngOnInit() { }

}
