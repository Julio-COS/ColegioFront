import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../service/connection.service';
import { User } from '../../interface/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  activate:boolean=true;
  width:string="w-full";
  showFiller = false;
  usuario_actual: String | null = null;

  constructor(private authService: AuthService){
    
  }
  ngOnInit(): void {
    this.usuario_actual = this.authService.getUsuarioActual();
    this.authService.getAuthToken().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.usuario_actual = this.authService.getUsuarioActual();
      } else {
        this.usuario_actual = null;
      }
    });
  }
}
