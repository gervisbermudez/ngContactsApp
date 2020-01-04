import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Contact } from '../models/contact.model';

// key that is used to access the data in local storageconst STORAGE_KEY = 'app_local_contacts';
const STORAGE_KEY = 'app_local_contacts';

@Injectable()
export class LocalStorageService {

     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

     public storeOnLocalStorage(contact: Contact): void {
          const currentContactsList = this.storage.get(STORAGE_KEY) || [];
          let isActuallyInStorage = false;
          console.log(currentContactsList.length);
          currentContactsList.forEach(element => {
               if (element.id == contact.id) {
                    isActuallyInStorage = true;
               }
          });
          if (!isActuallyInStorage) {
               currentContactsList.push(contact);
          }
          this.storage.set(STORAGE_KEY, currentContactsList);
     }

     public getstoreOnLocalStorage(): [] {
          return this.storage.get(STORAGE_KEY) || []
     }
}