import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { AppMenu } from "./menu-component/menu.component";
import { AppSearch } from "./search-component/search.component";
import { AppFixedBtn } from "./fixed-btn-component/fixed.btn.component";
import { AppContactList } from "./contact-list-component/contact.list.component";

@NgModule({
  declarations: [AppComponent, AppMenu, AppSearch, AppFixedBtn, AppContactList],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
