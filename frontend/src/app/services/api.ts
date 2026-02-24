import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable({providedIn:'root'})
export class ApiService {
  url = 'https://zeeguros-kanban-2.onrender.com';

  constructor(private http: HttpClient){}

  login(data:any){ return this.http.post(this.url+'/login',data); }
  getTasks(){ return this.http.get(this.url+'/tasks'); }
  createTask(t:any){ return this.http.post(this.url+'/tasks',t); }
  updateTask(id:number,t:any){return this.http.put(this.url+'/tasks/'+id,t);}
  deleteTask(id:number){return this.http.delete(this.url+'/tasks/'+id);}
}
