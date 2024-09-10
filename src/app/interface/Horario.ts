import { format } from "date-fns";

export interface Horario{
    idHorario:      number;
    idAula:         number;
    idDocente:      number;
    idCurso:        number;

    fechaInicio:    string;//date
    fechaFinal:     string;//date
    horaInicio:     string;
    horaFina:       string;
}

export class HorarioResponse{
    idHorario=0;
    idAula=0;
    idDocente=0;
    idCurso=0;

    fechaInicio=format(new Date(),'yyyy-MM-dd');
    fechaFinal=format(new Date(),'yyyy-MM-dd');
    horaInicio='';
    horaFina='';
}