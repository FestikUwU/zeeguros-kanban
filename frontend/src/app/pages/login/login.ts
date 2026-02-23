import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email='';
  password='';
  error='';

  constructor(private api:ApiService, private router:Router){}

  login(){
    this.api.login({email:this.email,password:this.password})
      .subscribe({
        next:()=> this.router.navigate(['/board']),
        error:()=> this.error="Wrong login"
      })
  }
}
