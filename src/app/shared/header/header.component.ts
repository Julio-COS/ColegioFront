import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activate:boolean=true;

  @Output() showNavigate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService:AuthService,
    private router: Router
  ){}

  actionShowNavigate(){
    this.activate= !this.activate
    this.showNavigate.emit(this.activate);
  }

  salir(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
