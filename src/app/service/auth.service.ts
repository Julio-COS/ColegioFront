import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interface/user';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarios:User[]=[];
  private isAuthenticated = new BehaviorSubject<boolean>(this.checkLocalStorage());
  
  private checkLocalStorage(): boolean {
    const token = localStorage.getItem('authToken');
    return token !== null;
  }

  constructor(private connectionService:ConnectionService) {
    this.connectionService.getData().subscribe(data => {
      this.usuarios = data;
    });
   }

  login(usuario: string, password: string): Observable<boolean> {
    const user = this.usuarios.find(u => u.usuario === usuario && u.password === password);
    const isLoggedIn = !!user;
    if (isLoggedIn) {
      localStorage.setItem('authToken', 'true');
      localStorage.setItem('usuario', usuario);
    }
    this.isAuthenticated.next(isLoggedIn); 
    return of(isLoggedIn);
  }

  getAuthToken(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticated.next(false);
  }
}
