import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as _ from 'lodash';

const NOT_FOUND_RESOURCE_MESSAGE = 'No se encontró el recurso.';

@Injectable()
export class ClientErrorInterceptor implements HttpInterceptor {

  constructor(private toastrSvc: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        let message: string = '';
        switch (response.status) {
          case 400:
            message = response.error.message;
            
            if (_.isPlainObject(response.error.errors)) {
              for (const key in response.error.errors) {
                this.toastrSvc.warning(`${response.error.errors[key]}`);
              }
            }

            break;
          case 404:
            message = NOT_FOUND_RESOURCE_MESSAGE;
            break;
        }

        if (message.length > 0) {
          this.toastrSvc.warning(message);
        }

        return throwError(response);
      })
    );
  }
}
