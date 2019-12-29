import { Component } from "@angular/core";

import { LocalStorageService } from '../services/localStorage.service';

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
  contacts = [];
  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
         this.contacts = this.localStorageService.getstoreOnLocalStorage();
    }
}
