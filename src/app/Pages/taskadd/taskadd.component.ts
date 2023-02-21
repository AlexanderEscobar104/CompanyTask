import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { people } from 'src/app/Models/people';
import { task } from 'src/app/Models/task';
import { PeopleService } from 'src/app/Service/people.service';
import { TaskService } from 'src/app/Service/task.service';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent {

  peoples: people[];
  modelTask = new task();
  

  constructor(
    private http: HttpClient,
    private peopleService: PeopleService,
    private taskService: TaskService,
    private route:Router){}

  ngOnInit(){
    this.peopleService.getPeople().subscribe(data=>{
      this.peoples=data;
    })
  }

  //metodo para guardar la tarea
  guardarTarea(task: task){
    this.taskService.postTask(task).subscribe(data=>{
      alert("Tarea Almacenada.")
      this.route.navigate(["listar"]);
    })
  }
}
