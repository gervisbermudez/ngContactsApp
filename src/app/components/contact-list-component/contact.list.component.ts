import { Component } from "@angular/core";
import { ContactsServices } from "../../services/contacts.service";
import { Contact } from "../../models/contact.model";
import { LocalStorageService } from "../../services/localStorage.service";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact.list.component.html",
  styleUrls: ["./contact.list.component.scss"]
})
export class AppContactList {
  contacts: Contact[] = [];
  progress = false;

  constructor(public _cs: ContactsServices, private storage: LocalStorageService) {
    this.progress = true;
  }

  ngOnInit(): void {
    this._cs.getContacts()
      .subscribe((fireContacts: Contact[]) => {
        fireContacts.forEach((element: Contact)  => {
          this.storage.storeOnLocalStorage(element);
        });
        this.contacts = this.storage.getstoreOnLocalStorage();
        this.progress = false;
      });
  }
}
