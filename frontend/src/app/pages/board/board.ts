import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './board.html'
})
export class BoardComponent {

  tasks: any[] = [];

  newTitle = '';
  newDesc = '';
  newStatus = 'todo';

  constructor(private api: ApiService) {
    this.loadTasks();
  }

  loadTasks() {
    this.api.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  createTask() {
    if (!this.newTitle) return;

    this.api.createTask({
      title: this.newTitle,
      description: this.newDesc,
      status: this.newStatus
    }).subscribe(() => {
      this.newTitle = '';
      this.newDesc = '';
      this.newStatus = 'todo';
      this.loadTasks();
    });
  }

  moveTask(task:any,status:string){
    this.api.updateTask(task.id,{...task,status})
      .subscribe(()=>this.loadTasks());
  }

  deleteTask(task:any){
    this.api.deleteTask(task.id)
      .subscribe(()=>this.loadTasks());
  }

  filter = '';

  filteredTasks(){
    return this.tasks.filter(t =>
      t.title.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
