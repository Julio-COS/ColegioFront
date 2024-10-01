import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  listOperacion:any[]=[
    /* {'router':'reportedenotas','name':"Reporte De Notas"},  */
    {'router':'alumno','name':"Alumno"},
    {'router':'apoderado','name':"Apoderado"},
    {'router':'relacion-apoderado','name':"Relacion Apoderado"},

    {'router':'matricula','name':"Matricula"}, 
    {'router':'matricula-vacancia','name':"Matricula Vacancia"},

    {'router':'aula','name':"Aulas"},
    {'router':'curso','name':"Cursos"},
    {'router':'docente','name':"Docentes"}, 
    {'router':'horario','name':"Horario"}, 
    
    {'router':'pagos','name':"Pagos"}, 
    {'router':'comprobante-pago','name':"Comprobante de Pagos"}, 
  ]
}
