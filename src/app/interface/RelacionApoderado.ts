export interface RelacionApoderado{
    idRelacionApoderado:    number;
    idEstudiante:           number;
    idApoderado:            number;
    tipoRelacion:           string;
}


export class RelacionApoderadoResponse{
    idRelacionApoderado=0;
    idEstudiante=0;
    idApoderado=0;
    tipoRelacion='';
}

export interface RelacionApoderadoInfo{
    idRelacionApoderado:    number;
    relacionApoderado:      string;
    nombreEstudiante:       string;
    nombreApoderado:        string;
    tipoRelacion:           string;
}


export class RelacionApoderadoInfoResponse{
    idRelacionApoderado=0;
    nombreEstudiante='';
    nombreApoderado='';
    tipoRelacion='';
}