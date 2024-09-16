export interface Apoderado{
    idApoderado:    number;
    nombres:        string;
    apellidoP:      string;
    apellidoM:      string;
    dni:            string;
    telefono:       string;
    direccion:      string;
}

export class ApoderadoRespons{
    idApoderado=0;
    nombres='';
    apellidoP='';
    apellidoM='';
    dni='';
    telefono='';
    direccion='';
}