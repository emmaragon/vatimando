import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  isLoaderShowing: boolean;

  showLoader() {
    this.isLoaderShowing = true;
  }

  hideLoader() {
    this.isLoaderShowing = false;
  }
}
