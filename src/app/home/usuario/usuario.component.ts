import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../service/connection.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  usuarios: any[] = [];
  
  constructor(private apiConnection:ConnectionService){}

  ngOnInit(): void {
    this.apiConnection.getUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
}
