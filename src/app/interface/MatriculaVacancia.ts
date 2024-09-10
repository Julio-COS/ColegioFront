export interface MatriculaVacancia{
    idMVacancia:                number;
    idAula:                     number;
    disponibilidadActual:       number;
    disponibilidadTotal:        number;
}

export class MatriculaVacanciaResponse{
    idMVacancia=0;
    idAula=0;
    disponibilidadActual=0;
    disponibilidadTotal=0;
}