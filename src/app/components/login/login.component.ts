import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private service: LoginService, private router:Router) {}



  login() {
    if(this.username && this.password){
      this.service.loginUser(this.username,this.password).subscribe(response =>{
        if(response.role==='admin'){
          console.log("ts ",response)
          this.router.navigate(['/admin-dashboard'])
        }else{
        this.router.navigate(['/user-dashboard']);
        }

      });
    }
  }
}
