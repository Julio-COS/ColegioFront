import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  listOperacion:any[]=[
    {'router':'crudalumno','name':"Alumno"},
    {'router':'crudapoderado','name':"Apoderado"},
    {'router':'reportedenotas','name':"Reporte De Notas"}, 

    {'router':'crudaula','name':"Aulas"},
    {'router':'crudcurso','name':"Cursos"},
    {'router':'docente','name':"Docentes"}, 
    {'router':'horario','name':"Horario"}, 
    
    {'router':'matricula','name':"Matricula"}, 
    {'router':'pagos','name':"Pagos"}, 
  ]

  

}
