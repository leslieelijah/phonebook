import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { PhoneBookData } from './data.service';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};

@Injectable()
export class PhonebookService {
public url = 'assets/phonebookData.json';
    public addDataToBook: any;
    public viewDataPhonebook: any;
    public observable: Observable<any>;

    constructor(private http: HttpClient, private phonebookData: PhoneBookData) { }

    public getPhonebook() {
        this.observable = this.http.get(this.url).pipe(map(this.jsonPhonebookData));
        return this.observable;
    }

    public addToPhonebook() {

        this.observable = this.http.post(this.url, this.phonebookData, httpOptions).pipe(
          map(this.jsonPhonebookData)
        );
        console.log(this.jsonPhonebookData);
        return this.observable;
    }

    public updatePhonebook() {
        this.observable = this.http.put(this.url, this.phonebookData, httpOptions).pipe(
            map(this.jsonPhonebookData)
        );

        console.log(this.jsonPhonebookData);
        return this.observable;
    }

    public viewPhonebook() {
        this.observable = this.http.get(this.url, httpOptions).pipe(map(response => {
            this.observable = null;
            this.viewDataPhonebook = response;
            return this.viewDataPhonebook;
        }));

        return this.observable;
    }

    private jsonPhonebookData() {
        const phonebookData = this.phonebookData;
        return phonebookData || [];
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }


}


