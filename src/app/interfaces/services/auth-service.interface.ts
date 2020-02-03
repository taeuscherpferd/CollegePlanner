import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IAuthService {
  login(username: string, password: string);
  logout(); 
  autoAuthUser();
  createUser(username: string, password: string);

  getToken(): string; 
  getIsAuth(): boolean;
  getCurrentUserId(): string; 
  getAuthStatusListener(): Observable<boolean> 
}