import { Injectable, Inject } from '@angular/core';
import { Observable, observable, pipe, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { PhoneBookDBService } from './phonebookdb.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};


@Injectable()
export class PhonebookService {
    public observable: Observable<any>;
    public addDataToBook: any;
    public viewPhonebookResponse: any;

    constructor(private phoneBookdb: PhoneBookDBService) {  }

    public setLocalStoragePhoneBooks(phoneBooks: PhoneBookDBService[]) {
       const storeDB = localStorage.setItem('phonebook', JSON.stringify(phoneBooks));
       return storeDB;
    }

    public getPhoneBookItem(): PhoneBookDBService[] {
        const storageDb = JSON.parse(localStorage.getItem('phonebook'));
        return storageDb === null ? [] : storageDb;
    }

    public addToPhonebook(stname, lstname, company, phnumber) {
        const phoneBook = new PhoneBookDBService();
        const phoneBooks = this.getPhoneBookItem();
        phoneBook.firstName = stname;
        phoneBook.surname = lstname;
        phoneBook.phoneNumber = phnumber;
        phoneBook.companyOrRelationship = company;

        phoneBooks.push(phoneBook);

        return this.setLocalStoragePhoneBooks(phoneBooks);
    }

    public viewPhonebookObservable() {
        return this.viewPhonebookResponse = new Observable(observer => {
            observer.next(this.getPhoneBookItem());
        });
    }
}


