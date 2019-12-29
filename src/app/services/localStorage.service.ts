import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storageconst STORAGE_KEY = 'local_todolist';
const STORAGE_KEY = 'local_todolist';

@Injectable()
export class LocalStorageService {
     anotherTodolist = [];
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(taskTitle: string): void {
          
          // get array of tasks from local storage
          const currentTodoList = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentTodoList.push({
            name: "Title",
            lastName: "First Line",
            number: "+57 614613"
          });
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentTodoList);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
     }

     public getstoreOnLocalStorage(): [] {
          
          // get array of tasks from local storage
          return this.storage.get(STORAGE_KEY) || []
     }
}