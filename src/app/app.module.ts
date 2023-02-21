import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskaddComponent } from './Pages/taskadd/taskadd.component';
import { TaskeditComponent } from './Pages/taskedit/taskedit.component';
import { TasklistComponent } from './Pages/tasklist/tasklist.component';
import { TaskService } from './Service/task.service';

@NgModule({
  declarations: [
    AppComponent,
   
    TaskaddComponent,
    TaskeditComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
