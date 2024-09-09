import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from '../interface/Aula';
import { Curso } from '../interface/Curso';
import { Horario } from '../interface/Horario';
import { Docente } from '../interface/Docente';

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
  postAula(data:Aula): Observable<Aula[]>{
    console.log(data);
    return this.http.post<Aula[]>(this.apiUrl+"POSTaula",data)
  }

  //CURSO
  getCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiUrl+"GETcursos")
  }

  //HORARIO
  getHorario(): Observable<Horario[]>{
    return this.http.get<Horario[]>(this.apiUrl+"GEThorarios")
  }

  //DOCENTE
  getDocente(): Observable<Docente[]>{
    return this.http.get<Docente[]>(this.apiUrl+"GETdocentes")
  }

}
