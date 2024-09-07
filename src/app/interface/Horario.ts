export interface Horario{
    idHorario:      string;
    idAula:         string;
    idDocente:      string;
    idCurso:        string;

    fechaInicio:    Date;
    fechaFinal:     Date;
    horaInicio:     string;
    horaFina:       string;
}