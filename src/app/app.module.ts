import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { AddContactsComponent } from './phonebook/add-contacts/add-contacts.component';
import { ViewContactsComponent } from './phonebook/view-contacts/view-contacts.component';
import { FilterPipe} from './filter.pipe';
import { PhonebookService } from './services/phonebook.service';
import { PhoneBookData } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    AddContactsComponent,
    ViewContactsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PhonebookService, PhoneBookData],
  bootstrap: [AppComponent]
})
export class AppModule { }
