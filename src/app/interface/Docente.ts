import { format } from "date-fns";

export interface Docente{
    idDocente:              number;
    nombre:                 string;
    apellidoPaterno:        string;
    apellidoMaterno:        string;
    ciudad:                 string;
    direccion:              string;
    tipoCargo:              string;
    dni:                    string;
    fechaRegistro:          string;//date
}

export class DocenteResponse{

    idDocente=0;
    nombre='';
    apellidoPaterno='';
    apellidoMaterno='';
    ciudad='';
    direccion='';
    tipoCargo='';
    dni='';
    fechaRegistro= format(new Date(),'yyyy-MM-dd');
    
}