import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from '../interface/Aula';
import { Curso } from '../interface/Curso';
import { Horario } from '../interface/Horario';
import { Docente } from '../interface/Docente';
import { Alumno } from '../interface/Alumno';
import { Matricula } from '../interface/Matricula';
import { MatriculaVacancia } from '../interface/MatriculaVacancia';

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
  getAula(): Observable<Aula[]>{
    return this.http.get<Aula[]>(this.apiUrl+"GETaulas")
  }
  postAula(data:Aula): Observable<Aula>{
    return this.http.post<Aula>(this.apiUrl+"POSTaula",data)
  }

  //CURSO
  getCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiUrl+"GETcursos");
  }
  postCurso(data:Curso): Observable<Curso>{
    return this.http.post<Curso>(this.apiUrl+"POSTcurso",data);
  }

  //HORARIO
  getHorario(): Observable<Horario[]>{
    return this.http.get<Horario[]>(this.apiUrl+"GEThorarios");
  }
  postHorario(data:Horario): Observable<Horario>{
    return this.http.post<Horario>(this.apiUrl+"POSThorario",data);
  }

  //DOCENTE
  getDocente(): Observable<Docente[]>{
    return this.http.get<Docente[]>(this.apiUrl+"GETdocentes")
  }
  postDocente(data:Docente): Observable<Docente>{
    return this.http.post<Docente>(this.apiUrl+"POSTdocente",data);
  }

  //ALUMNO
  getAlumno(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.apiUrl+"GETalumnos");
  }
  postAlumno(data:Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.apiUrl+"POSTalumno",data);
  }

  //Matricula
  getMatricula(): Observable<Matricula[]>{
    return this.http.get<Matricula[]>(this.apiUrl+"GETmatricula");
  }
  postMatricula(data:Matricula): Observable<Matricula>{
    return this.http.post<Matricula>(this.apiUrl+"POSTmatricula",data);
  }

  //MatriculaVacancia
  getMatriculaVacancia(): Observable<MatriculaVacancia[]>{
    return this.http.get<MatriculaVacancia[]>(this.apiUrl+"GETmatriculaVacancia");
  }
  postMatriculaVacancia(data:MatriculaVacancia): Observable<MatriculaVacancia>{
    return this.http.post<MatriculaVacancia>(this.apiUrl+"POSTmatriculaVacancia",data);
  }

/*     //MatriculaVacancia
    get(): Observable<[]>{
      return this.http.get<[]>(this.apiUrl+"GETs");
    }
    post(data:): Observable<>{
      return this.http.post<>(this.apiUrl+"POST",data);
    } */

}
