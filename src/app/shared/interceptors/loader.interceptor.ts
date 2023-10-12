import { LoaderService } from "src/app/shared/services/loader.service";
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderSvc: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const diableLoader = request.headers.get("disableLoader") != null;
    if (!diableLoader) {
      this.loaderSvc.show();
    }

    return next.handle(request).pipe(finalize(() => this.loaderSvc.hide()));
  }
}
