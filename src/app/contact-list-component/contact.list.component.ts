import { Component } from "@angular/core";

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
  contacts = [this.contact, this.contact, this.contact, this.contact];
}
