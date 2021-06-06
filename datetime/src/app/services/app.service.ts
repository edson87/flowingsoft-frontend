import { Injectable } from '@angular/core';
import { AppDatastoreService } from './app-datastore.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private appDatastoreService: AppDatastoreService) { }

  public sendDateTime(dateTime: any) {
    return this.appDatastoreService.sendDateTime(dateTime);
  }
}
