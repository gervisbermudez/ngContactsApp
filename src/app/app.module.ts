//Core
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from "./app.component";
import { AppMenu } from "./components/menu-component/menu.component";
import { AppSearch } from "./components/search-component/search.component";
import { AppFixedBtn } from "./components/fixed-btn-component/fixed.btn.component";
import { AppContactList } from "./components/contact-list-component/contact.list.component";

//Storage
import { StorageServiceModule } from "ngx-webstorage-service";

//Firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Services
import { LocalStorageService } from "./services/localStorage.service";
import { ContactsServices } from "./services/contacts.service";

//Ngrx
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/contact.reducer';

@NgModule({
  declarations: [AppComponent, AppMenu, AppSearch, AppFixedBtn, AppContactList],
  imports: [BrowserModule, 
  StorageServiceModule, 
  AngularFireModule.initializeApp(environment.firebase),  
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  AngularFireStorageModule, // imports firebase/storage only needed for storage features,
  StoreModule.forRoot({
      contact: reducer
    })
  ],
  providers: [LocalStorageService, ContactsServices],
  bootstrap: [AppComponent]
})
export class AppModule {}
