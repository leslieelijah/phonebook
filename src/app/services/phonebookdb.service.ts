import { Injectable, OnInit } from '@angular/core';


// @Injectable()
export class PhoneBookDBService implements OnInit {

    public firstName: any = 'Joe';
    public surname: any = 'Doe';
    public companyOrRelationship: any = 'JohnDoe INC';
    public phoneNumber: any = '+444 225 3336';

    constructor() {
        this.firstName = this.firstName;
        this.surname = this.surname;
        this.companyOrRelationship = this.companyOrRelationship;
        this.phoneNumber = this.phoneNumber;
     }

     ngOnInit() { }
}
