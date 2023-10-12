import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
// import { UserInfo } from 'src/app/user/shared/models/user-info.model';
import { AUTH_TOKEN, SIGN_IN_URL } from '../constants';
import { Auth } from '../models/auth';
import { decodeJwt } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get currentUser() {
    return decodeJwt(localStorage.getItem(AUTH_TOKEN)) // as UserInfo;
  }

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  signIn(model: Auth) {
    return this.http.post<{ token: string }>(`/api/auth/token`, model).pipe(
      tap((x) => {
        localStorage.setItem(AUTH_TOKEN, x.token);
        const redirectUrl = this.route.snapshot.queryParams.sourceUrl || '/';
        this.router.navigateByUrl(redirectUrl, {
          replaceUrl: true,
        });
      })
    )
  }

  signOut() {
    localStorage.removeItem(AUTH_TOKEN);
    this.router.navigateByUrl(SIGN_IN_URL);
  }

  isAuthenticated() {
    return !!localStorage.getItem(AUTH_TOKEN) && this.currentUser.exp > Date.now();
  }

  getToken() {
    return localStorage.getItem(AUTH_TOKEN);
  }
}
