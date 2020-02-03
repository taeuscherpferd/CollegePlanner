import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment'
import { IAuthService } from '../interfaces/services/auth-service.interface'

const BACKEND_URL = environment.apiUrl + "user/"

@Injectable({ providedIn: "root" })
export class AuthService implements IAuthService  {
  login(username: string, password: string) {
    throw new Error("Method not implemented.");
  }  

  logout() {
    throw new Error("Method not implemented.");
  }

  autoAuthUser() {
    throw new Error("Method not implemented.");
  }

  createUser(username: string, password: string) {
    throw new Error("Method not implemented.");
  }

  getToken(): string {
    throw new Error("Method not implemented.");
  }

  getIsAuth(): boolean {
    throw new Error("Method not implemented.");
  }

  getCurrentUserId(): string {
    throw new Error("Method not implemented.");
  }

  getAuthStatusListener(): import("rxjs").Observable<boolean> {
    throw new Error("Method not implemented.");
  }
}