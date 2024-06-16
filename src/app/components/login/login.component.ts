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

  constructor(private service: LoginService, private router: Router) {}

  error: string | null = null;
  login() {
    if (this.username && this.password) {
      this.service.loginUser(this.username, this.password).subscribe(
        (response) => {
          if (response.role === 'admin') {
            this.service.setRole("admin");
            this.error = null;
            this.router.navigate(['/admin-dashboard']);
          } else {
            this.service.setRole("user");
            this.router.navigate(['/user-dashboard']);
          }
        },
        (error) => {
          // Handle error response
          this.error = error; // Extract specific error message
          console.log("my error ",error);

          alert(error);
        }
      );
    }
  }
}
