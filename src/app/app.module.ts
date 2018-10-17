import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { AddContactsComponent } from './phonebook/add-contacts/add-contacts.component';
import { ViewContactsComponent } from './phonebook/view-contacts/view-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    AddContactsComponent,
    ViewContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
