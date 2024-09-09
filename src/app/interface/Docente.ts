export interface Docente{
    idDocente:              number;
    nombre:                 string;
    apellidoMaterno:        string;
    apellidoPaterno:        string;
    ciudad:                 string;
    direccion:              string;
    tipoCargo:              string;
    dni:                    string;
    fechaRegistro:          Date;
}

export class DocenteResponse{

    idDocente=0;
    nombre='';
    apellidoMaterno='';
    apellidoPaterno='';
    ciudad='';
    direccion='';
    tipoCargo='';
    dni='';
    fechaRegistro=new Date;
    
}