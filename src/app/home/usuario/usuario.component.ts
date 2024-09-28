import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../service/connection.service';
import { User } from '../../interface/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{

  usuario: string = '';
  password: string = '';

  constructor(

    private authService: AuthService,
    private router: Router
  ){ }

  ngOnInit(): void {

  }

login() {
  this.authService
  .login(this.usuario, this.password)
  .subscribe(isAuthenticated => {
    if (isAuthenticated) {
      alert('Login exitoso');
      this.router.navigate(['menu'])
    } else {
      alert('Credenciales incorrectas');
    }
    });
  }
}
