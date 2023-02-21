import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { people } from 'src/app/Models/people';
import { task } from 'src/app/Models/task';
import { PeopleService } from 'src/app/Service/people.service';
import { TaskService } from 'src/app/Service/task.service';
import { compareAsc, format } from 'date-fns'


@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent {
  peoples: people[];
  modelTask = new task();
  diasAtraso: number;

  constructor(
    private http: HttpClient,
    private peopleService: PeopleService,
    private taskService: TaskService,
    private route:Router){}

  ngOnInit(){
    //busca la tarea a editar
    this.editarTarea();
    //llena el combo de asignado
    this.peopleService.getPeople().subscribe(data=>{
      this.peoples=data;
    })
  }

  //metodo para editar la tarea
  editarTarea(){
   let id = localStorage.getItem("id");
    this.taskService.getTaskId(+id!).subscribe(data=>{
      this.modelTask = data;
      var fechaInicio = new Date(this.modelTask.fechaejecucion).getTime();
      var fechaFin    = new Date().getTime();
      var diff = fechaFin - fechaInicio;
      if(diff > 0){
        this.diasAtraso = Math.trunc(diff/(1000*60*60*24))
      }else{
        this.diasAtraso = 0
      }
      
    })
  }

  //metodo para actualizar la tarea
  actualizarTarea(task:task){
    this.taskService.putTask(task).subscribe(data=>{
      this.modelTask = data;
      alert("Tarea Actualizada.")
      this.route.navigate(["listar"]);
    })
  }
}
