import { AulaResponse } from "./Aula";
import { CursoResponse } from "./Curso";
import { DocenteResponse } from "./Docente";
import { HorarioResponse } from "./Horario";

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

        /* case '':
            clase = new ; break; */
    }
    
    if(clase){
        resultados=Object.keys(clase);
    }

    return resultados;
}