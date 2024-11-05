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

export const getEntityPropiedades = (entidad: string): Array<any> => {
    const entityClassMap: { [key: string]: any } = {
      'Aula': AulaResponse,
      'Curso': CursoResponse,
      'Horario': HorarioInfoResponse,
      'Docente': DocenteResponse,
      'Alumno': AlumnoResponse,
      'Matricula': MatriculaInfoResponse,
      'MatriculaVacancia': MatriculaVacanciaInfoResponse,
      'Apoderado': ApoderadoResponse,
      'Relacion Apoderado': RelacionApoderadoInfoResponse,
      'Pago': PagoResponse,
      'Comprobante Pago': ComprobantePagoResponse,
    };
  
    const Clase = entityClassMap[entidad];
    const claseInstance = Clase ? new Clase() : null;
  
    return claseInstance ? Object.keys(claseInstance) : [];
  };

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