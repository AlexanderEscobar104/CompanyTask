import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskaddComponent } from './Pages/taskadd/taskadd.component';
import { TaskeditComponent } from './Pages/taskedit/taskedit.component';
import { TasklistComponent } from './Pages/tasklist/tasklist.component';

const routes: Routes = [
{path: 'listar', component: TasklistComponent },
{path: 'editar', component: TaskeditComponent },
{path: 'agregar', component: TaskaddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
