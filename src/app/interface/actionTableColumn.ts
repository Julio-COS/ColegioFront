import { AlumnoResponse } from "./Alumno";
import { AulaResponse } from "./Aula";
import { CursoResponse } from "./Curso";
import { DocenteResponse } from "./Docente";
import { HorarioResponse } from "./Horario";
import { MatriculaResponse } from "./Matricula";
import { MatriculaVacanciaResponse } from "./MatriculaVacancia";

export interface Accion<T=any>{
    accion:string;
    fila?: T;
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
            clase = new HorarioResponse(); break;
        case 'Docente':
            clase = new DocenteResponse(); break;

        case 'Alumno':
            clase = new AlumnoResponse(); break; 
        case 'Matricula':
            clase = new MatriculaResponse(); break; 
        case 'MatriculaVacancia':
            clase = new MatriculaVacanciaResponse(); break; 
        /* case '':
            clase = new ; break; */
    }
    
    if(clase){
        resultados=Object.keys(clase);
    }

    return resultados;
}