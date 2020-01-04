import { Component } from "@angular/core";
import { ContactsServices } from "../../services/contacts.service";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact.list.component.html",
  styleUrls: ["./contact.list.component.scss"]
})
export class AppContactList {
  contacts = [];
  progress = false;
  constructor(public _cs: ContactsServices) {
    this.progress = true;
  }

  ngOnInit(): void {
    this._cs.getContacts()
    .subscribe((contacts: any[]) => {
      this.contacts = contacts;
      this.progress = false;
    });
  }
}
