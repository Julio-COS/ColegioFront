import { AlumnoResponse } from "./Alumno";
import { AulaResponse } from "./Aula";
import { CursoResponse } from "./Curso";
import { DocenteResponse } from "./Docente";
import { HorarioInfoResponse } from "./Horario";
import { MatriculaInfoResponse } from "./Matricula";
import { MatriculaVacanciaInfoResponse } from "./MatriculaVacancia";
import { ApoderadoResponse } from "./Apoderado";
import { RelacionApoderadoInfoResponse } from "./RelacionApoderado";
import { PagoResponse } from "./Pago";
import { ComprobantePagoResponse } from "./ComprobantePago";

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
        case 'Apoderado':
            clase = new ApoderadoResponse(); break; 
        case 'Relacion Apoderado':
            clase = new RelacionApoderadoInfoResponse(); break; 
        case 'Pago':
            clase = new PagoResponse(); break; 
        case 'Comprobante Pago':
            clase = new ComprobantePagoResponse(); break;
        /* case '':
            clase = new ; break; */
    }
    
    if(clase){
        resultados=Object.keys(clase);
    }

    return resultados;
}

export const classIcon = (accion: string): string[] => {
    let clase = '';
    let src='';
    switch(accion){
      case 'Editar': src='assets/svg/edit.svg';clase = 'mr-3 cursor-pointer'; break;
      case 'Eliminar': src='assets/svg/delete.svg'; clase="mr-3 cursor-pointer"; break; 
      case 'Pagar': src='assets/svg/pay.svg'; clase="mr-3 cursor-pointer"; break;
      case 'Imprimir': src='assets/svg/print.svg'; clase="mr-3 cursor-pointer"; break;
    }
    return [clase,src];
  }