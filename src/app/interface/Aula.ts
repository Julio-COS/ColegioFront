export interface Aula{
    idAula?:             number;
    nivel:              string;
    seccion:            string;
    gradoActual:        string;
}

export class AulaResponse{
    idAula=0;
    nivel='';
    seccion='';
    gradoActual='';
}