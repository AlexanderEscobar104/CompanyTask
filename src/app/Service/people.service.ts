import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { people } from '../Models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  //url conexion a backend
  urlApi= environment.conexionApi + 'people'

  constructor(private http:HttpClient) { }

  //metodo para traer las persona para asignar a la tarea
  getPeople(){
    return this.http.get<people[]>(this.urlApi)
  }
}
