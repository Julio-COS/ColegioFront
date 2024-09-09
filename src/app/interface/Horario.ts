export interface Horario{
    idHorario:      number;
    idAula:         number;
    idDocente:      number;
    idCurso:        number;

    fechaInicio:    Date;
    fechaFinal:     Date;
    horaInicio:     string;
    horaFina:       string;
}

export class HorarioResponse{
    idHorario=0;
    idAula=0;
    idDocente=0;
    idCurso=0;

    fechaInicio=new Date;
    fechaFinal=new Date;
    horaInicio='';
    horaFina='';
}