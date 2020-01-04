import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from '../models/contact.model';

@Injectable()
export class ContactsServices {

  private contactsCollection: AngularFirestoreCollection<Contact>;
  public contacts: Observable<Contact[]>;

  constructor(private afs: AngularFirestore) { }

  public getContacts() {
    this.contactsCollection = this.afs.collection<Contact>("contacts");
    /* 
    return this.itemsCollection.valueChanges(); */
    return this.contacts = this.contactsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
      )
    );
  }

}
