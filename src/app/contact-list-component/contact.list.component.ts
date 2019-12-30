import { Component } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

//import { LocalStorageService } from '../services/localStorage.service';
export interface Item { name: string; }

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact.list.component.html",
  styleUrls: ["./contact.list.component.scss"]
})
export class AppContactList {
  contact = {
    name: "Title",
    lastName: "First Line",
    number: "+57 614613"
  };
  contacts: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('contacts');
    this.contacts = this.itemsCollection.valueChanges();
    console.log(this.contacts);
  }

  ngOnInit(): void {
         //this.contacts = this.localStorageService.getstoreOnLocalStorage();
    }
}
