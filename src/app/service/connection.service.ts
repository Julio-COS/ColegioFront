import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from '../interface/Aula';
import { Curso } from '../interface/Curso';
import { Horario, HorarioInfo } from '../interface/Horario';
import { Docente } from '../interface/Docente';
import { Alumno } from '../interface/Alumno';
import { Matricula } from '../interface/Matricula';
import { MatriculaVacancia, MatriculaVacanciaInfo } from '../interface/MatriculaVacancia';
import { successResponse } from '../interface/successResponse';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  
  getData(consulta:string): Observable<any> {
    return this.http.get<any>(this.apiUrl+consulta);
  }
  
  //AULA
  getAulas(): Observable<Aula[]>{
    return this.http.get<Aula[]>(this.apiUrl+"GETaulas")
  }
  getAula(id:string): Observable<Aula>{
    return this.http.get<Aula>(this.apiUrl+`GETaula/${id}`)
  }
  postAula(data:Aula): Observable<Aula>{
    return this.http.post<Aula>(this.apiUrl+"POSTaula",data)
  }
  deleteAula(id:string):Observable<successResponse>{
    return this.http.delete<successResponse>(this.apiUrl+`DELETEaula/${id}`);
  }
  putAula(data:Aula): Observable<successResponse>{
    return this.http.put<successResponse>(this.apiUrl + `PUTaula/${data.idAula}`,data);
  }

  //CURSO
  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiUrl+"GETcursos");
  }
  getCurso(id:string): Observable<Curso>{
    return this.http.get<Curso>(this.apiUrl+`GETcurso/${id}`);
  }
  postCurso(data:Curso): Observable<Curso>{
    return this.http.post<Curso>(this.apiUrl+"POSTcurso",data);
  }
  deleteCurso(id:string):Observable<successResponse>{
    return this.http.delete<successResponse>(this.apiUrl+`DELETEcurso/${id}`);
  }
  putCurso(data:Curso): Observable<successResponse>{
    return this.http.put<successResponse>(this.apiUrl + `PUTcurso/${data.idCurso}`,data);
  }

  //HORARIO
  getHorarios(): Observable<HorarioInfo[]>{
    return this.http.get<HorarioInfo[]>(this.apiUrl+"GEThorarios");
  }
  getHorario(id:string): Observable<Horario>{
    return this.http.get<Horario>(this.apiUrl+`GEThorario/${id}`);
  }
  postHorario(data:Horario): Observable<Horario>{
    return this.http.post<Horario>(this.apiUrl+"POSThorario",data);
  }
  putHorario(data:Horario): Observable<successResponse>{
    return this.http.put<successResponse>(this.apiUrl + `PUThorario/${data.idHorario}`,data);
  }
  deleteHorario(id:string):Observable<successResponse>{
    return this.http.delete<successResponse>(this.apiUrl+`DELETEhorario/${id}`);
  }

  

  //DOCENTE
  getDocentes(): Observable<Docente[]>{
    return this.http.get<Docente[]>(this.apiUrl+"GETdocentes")
  }
  getDocente(id:string): Observable<Docente>{
    return this.http.get<Docente>(this.apiUrl+`GETdocente/${id}`);
  }
  postDocente(data:Docente): Observable<Docente>{
    return this.http.post<Docente>(this.apiUrl+"POSTdocente",data);
  }
  deleteDocente(id:string):Observable<successResponse>{
    return this.http.delete<successResponse>(this.apiUrl+`DELETEdocente/${id}`);
  }
  putDocente(data:Docente): Observable<successResponse>{
    return this.http.put<successResponse>(this.apiUrl + `PUTdocente/${data.idDocente}`,data);
  }

  //ALUMNO
  getAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.apiUrl+"GETalumnos");
  }
  getAlumno(id:string): Observable<Alumno>{
    return this.http.get<Alumno>(this.apiUrl+`GETalumno/${id}`);
  }
  postAlumno(data:Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.apiUrl+"POSTalumno",data);
  }
  deleteAlumno(id:string):Observable<successResponse>{
    return this.http.delete<successResponse>(this.apiUrl+`DELETEalumno/${id}`);
  }
  putAlumno(data:Alumno): Observable<successResponse>{
    return this.http.put<successResponse>(this.apiUrl + `PUTalumno/${data.idEstudiante}`,data);
  }


  //Matricula
  getMatriculas(): Observable<Matricula[]>{
    return this.http.get<Matricula[]>(this.apiUrl+"GETmatriculas");
  }
  getMatricula(id:string): Observable<Matricula>{
    return this.http.get<Matricula>(this.apiUrl+`GETmatricula/${id}`);
  }
  postMatricula(data:Matricula): Observable<Matricula>{
    return this.http.post<Matricula>(this.apiUrl+"POSTmatricula",data);
  }
  deleteMatricula(id:string):Observable<successResponse>{
    return this.http.delete<successResponse>(this.apiUrl+`DELETEmatricula/${id}`);
  }
  putMatricula(data:Matricula): Observable<successResponse>{
    return this.http.put<successResponse>(this.apiUrl + `PUTmatricula/${data.idMatricula}`,data);
  }

  //MatriculaVacancia
  getMatriculaVacancias(): Observable<MatriculaVacanciaInfo[]>{
    return this.http.get<MatriculaVacanciaInfo[]>(this.apiUrl+"GETmatriculaVacancias");
  }
  getMatriculaVacancia(id:string): Observable<MatriculaVacancia>{
    return this.http.get<MatriculaVacancia>(this.apiUrl+`GETmatriculaVacancia/${id}`);
  }
  postMatriculaVacancia(data:MatriculaVacancia): Observable<MatriculaVacancia>{
    return this.http.post<MatriculaVacancia>(this.apiUrl+"POSTmatriculaVacancia",data);
  }
  deleteMatriculaVacancia(id:string):Observable<successResponse>{
    return this.http.delete<successResponse>(this.apiUrl+`DELETEmatriculaVacancia/${id}`);
  }
  putMatriculaVacancia(data:MatriculaVacancia): Observable<successResponse>{
    return this.http.put<successResponse>(this.apiUrl + `PUTmatriculaVacancia/${data.idMVacancia}`,data);
  }

    /*     
    gets(): Observable<[]>{
      return this.http.get<[]>(this.apiUrl+"GETs");
    }
    get(id:string): Observable<>{
      return this.http.get<>(this.apiUrl+`GET/${id}`);
    }
    post(data:): Observable<>{
      return this.http.post<>(this.apiUrl+"POST",data);
    } 
    delete(id:string):Observable<successResponse>{
      return this.http.delete<successResponse>(this.apiUrl+`DELETE/${id}`);
    }
    put(data:): Observable<successResponse>{
      return this.http.put<successResponse>(this.apiUrl + `PUT/${data.id}`,data);
    }
    */

}
