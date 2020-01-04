import { Component } from "@angular/core";
import { ContactsServices } from "../../services/contacts.service";
import { Contact } from "../../models/contact.model";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact.list.component.html",
  styleUrls: ["./contact.list.component.scss"]
})
export class AppContactList {
  contacts: Contact[] = [];
  progress = false;

  constructor(public _cs: ContactsServices) {
    this.progress = true;
  }

  ngOnInit(): void {
    this._cs.getContacts()
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
        this.progress = false;
      });
  }
}
