import { AlumnoResponse } from "./Alumno";
import { AulaResponse } from "./Aula";
import { CursoResponse } from "./Curso";
import { DocenteResponse } from "./Docente";
import { HorarioInfoResponse } from "./Horario";
import { MatriculaInfoResponse } from "./Matricula";
import { MatriculaVacanciaInfoResponse } from "./MatriculaVacancia";

export interface Accion<T=any>{
    accion:string; //editar-eliminar
    fila?: T; //registro
}

export const getEntityPropiedades=(entidad:string):Array<any> =>{
    let resultados:any =[];
    let clase: any;

    switch(entidad){
        case 'Aula':
            clase = new AulaResponse(); break;
        case 'Curso':
            clase = new CursoResponse(); break;
        case 'Horario':
            clase = new HorarioInfoResponse(); break;
        case 'Docente':
            clase = new DocenteResponse(); break;
        case 'Alumno':
            clase = new AlumnoResponse(); break; 
        case 'Matricula':
            clase = new MatriculaInfoResponse(); break; 
        case 'MatriculaVacancia':
            clase = new MatriculaVacanciaInfoResponse(); break; 
        /* case '':
            clase = new ; break; */
    }
    
    if(clase){
        resultados=Object.keys(clase);
    }

    return resultados;
}