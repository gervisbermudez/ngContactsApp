//Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from "./app.component";
import { AppMenu } from "./menu-component/menu.component";
import { AppSearch } from "./search-component/search.component";
import { AppFixedBtn } from "./fixed-btn-component/fixed.btn.component";
import { AppContactList } from "./contact-list-component/contact.list.component";

//Storage
import { StorageServiceModule } from 'ngx-webstorage-service';

//Services
import {LocalStorageService} from './app/Services/contacts.service';

@NgModule({
  declarations: [AppComponent, AppMenu, AppSearch, AppFixedBtn, AppContactList],
  imports: [BrowserModule, StorageServiceModule],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
