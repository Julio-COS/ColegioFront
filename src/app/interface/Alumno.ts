import { format } from "date-fns";

export interface Alumno {
    idEstudiante?:       number;
    nombres:            string;
    apeMaterno:         string;
    apePaterno:         string;
    dni:                string;
    fechaRegistro:      string;//date
    fechaNacimiento:    string;//date
    genero:             string;
    direccion:          string;
    telefono:           string;
}

export class AlumnoResponse {
    idEstudiante=0;
    nombres='';
    apeMaterno='';
    apePaterno='';
    dni='';
    fechaRegistro=      format(new Date(),'yyyy-MM-dd');
    fechaNacimiento=    format(new Date(),'yyyy-MM-dd');
    genero='';
    direccion='';
    telefono='';
}