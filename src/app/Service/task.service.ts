import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from '../Models/task';
import { environment } from '../environments/environments';
import { compareAsc, format } from 'date-fns'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //url conexion a backend
  urlApi= environment.conexionApi + 'task'

  constructor(private http:HttpClient) { }

  //metodo para traer todas las tareas
  getTask(){
    return this.http.get<task[]>(this.urlApi)
  }

  //metodo para traer una sola tarea
  getTaskId(id: number){
    return this.http.get<task>(this.urlApi+"/"+id)
  }


  //metodo para guardar tarea
  postTask(task: task){
    const fecha = new Date();
    task.fechacreacion = format(fecha, 'yyyy-MM-dd')
    return this.http.post<task>(this.urlApi + "/",task)
  }

  //metodo para actualizar la tarea
  putTask(task: task){
    const fecha = new Date();
    task.fechacreacion = format(fecha, 'yyyy-MM-dd')
    return this.http.put<task>(this.urlApi +  "/" + task.id ,task)
  }

  //metodo para eliminar la tarea
  deleteTask(task: task){
    return this.http.delete<task>(this.urlApi +  "/" + task.id )
  }
}
