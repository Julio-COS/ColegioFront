import { format } from "date-fns";

export interface Matricula{
    idMatricula:        number;
    idMVacancia:        number;
    idEstudiante:       number;
    fechaRegistro:      string;//date
    estado:             string;
}

export class MatriculaResponse{
    idMatricula=0;
    idMVacancia=0;
    idEstudiante=0;
    fechaRegistro=format(new Date(),'yyyy-MM-dd');
    estado='';
}


export interface MatriculaInfo{
    idMatricula:        number;
    Vacancia:           string;
    Estudiante:          string;
    fechaRegistro:      string;//date
    estado:             string;
}

export class MatriculaInfoResponse{
    idMatricula=0;
    Vacancia='';
    Estudiante='';
    fechaRegistro=format(new Date(),'yyyy-MM-dd');
    estado='';
}