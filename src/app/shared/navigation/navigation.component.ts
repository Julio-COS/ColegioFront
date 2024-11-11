import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  listOperacion:any[]=[
    /* {'router':'reportedenotas','name':"Reporte De Notas"},  */
    {'router':'alumno','name':"Alumno", 'icon': 'fa-person'},
    {'router':'apoderado','name':"Apoderado", 'icon': 'fa-solid fa-person-breastfeeding'},
    {'router':'relacion-apoderado','name':"Relación Apoderado", 'icon': 'fa-solid fa-people-roof'},

    {'router':'matricula','name':"Matrícula", 'icon': 'fa-solid fa-address-card'}, 
    {'router':'matricula-vacancia','name':"Matrícula Vacancia", 'icon': 'fa-solid fa-people-arrows'},

    {'router':'aula','name':"Aulas", 'icon': 'fa-solid fa-landmark'},
    {'router':'curso','name':"Cursos", 'icon': 'fa-solid fa-book-journal-whills'},
    {'router':'docente','name':"Docentes", 'icon': 'fa-solid fa-chalkboard-user'}, 
    {'router':'horario','name':"Horario", 'icon': 'fa-solid fa-clock'}, 
    
    {'router':'pagos','name':"Pagos", 'icon': 'fa-solid fa-credit-card'}, 
    {'router':'comprobante-pago','name':"Comprobante de Pagos", 'icon': 'fa-solid fa-receipt'}, 
  ]
}
