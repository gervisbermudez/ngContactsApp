import { Component } from "@angular/core";
import { ContactsServices } from "../services/contacts.service";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact.list.component.html",
  styleUrls: ["./contact.list.component.scss"]
})
export class AppContactList {
  contacts = [];

  constructor(public _cs: ContactsServices) {
    this._cs.getContacts()
    .suscribe((contacts: any[]) => {
      console.log(contacts);
    });
  }

  ngOnInit(): void {
    //this.contacts = this.localStorageService.getstoreOnLocalStorage();
  }
}
