import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Service/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  tasks: task[];

  constructor(private taskService: TaskService, private route:Router){}


  ngOnInit(){
    //lista todas las tareas
    this.taskService.getTask().subscribe(data=>{
      this.tasks=data;
    })
  }

  //crear nueva tarea
  nuevaTarea(){
    this.route.navigate(["agregar"]);
  }

  //editar tarea seleccionada
  editarTarea(task:task):void{
    localStorage.setItem("id", task.id.toString())
    this.route.navigate(["editar"]);
  }

  //elimina las tareas
  eliminarTarea(task:task){
    this.taskService.deleteTask(task).subscribe(data=>{
      this.tasks = this.tasks.filter(t=>t!==task);
      alert("Tarea Eliminada.")
      this.route.navigate(["listar"]);
    })
  }
}
