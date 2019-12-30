import { Inject, Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
export interface Contact {
  name: String;
  lastName: String;
  number: Number;
}

@Injectable()
export class ContactsServices {
  private itemsCollection: AngularFirestoreCollection<any>;
  public contacts: any[] = [];

  constructor(private afs: AngularFirestore) {}

  public getContacts() {
    this.itemsCollection = this.afs.collection<any>("contacts");
    return this.itemsCollection.valueChanges();
  }
}
