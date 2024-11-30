import { Component, inject, OnInit } from '@angular/core';
import { ConnectionService } from '../../service/connection.service';
import { User } from '../../interface/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{

  private _snackBar = inject(MatSnackBar);
  usuario: string = '';
  password: string = '';
  //
  loading: boolean = false;

  constructor(

    private authService: AuthService,
    private router: Router,
    private snack: MatSnackBarModule
  ){ }

  ngOnInit(): void {

  }

login() {

  this.authService
  .login(this.usuario, this.password)
  .subscribe(isAuthenticated => {
    if (isAuthenticated) {
      //
      /* alert('Login exitoso'); */
      this._snackBar.open('Credenciales correctas', 'Aceptar',{
        duration:4000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      this.router.navigate(['menu'])
    } else {
      /* alert('Credenciales incorrectas'); */
      this._snackBar.open('Credenciales incorrectas :(', 'Aceptar',{
        duration:3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
    });
  }
}
