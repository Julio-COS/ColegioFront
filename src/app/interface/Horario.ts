import { format } from "date-fns";

export interface Horario{
    idHorario:      number;
    idAula:         number;
    idDocente:      number;
    idCurso:        number;

    Fecha_inicio:    string;//date
    Fecha_final:     string;//date
    hora_inicio:     string;
    hora_final:      string;
}

export interface HorarioInfo{
    strAula:         string;
    strDocente:      string;
    strCurso:        string;
    
    Fecha_inicio:    string;//date
    Fecha_final:     string;//date
    hora_inicio:     string;
    hora_final:      string;
}

export class HorarioResponse{
    idHorario=0;
    idAula=0;
    idDocente=0;
    idCurso=0;

    Fecha_inicio=format(new Date(),'yyyy-MM-dd');
    Fecha_final=format(new Date(),'yyyy-MM-dd');
    hora_inicio='';
    hora_final='';
}