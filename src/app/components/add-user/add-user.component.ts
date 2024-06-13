import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user!: User;

  myForm: FormGroup;

  constructor(private adminService: AdminService, private router: Router) {
    this.myForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      role: new FormControl(),
    });
  }

  onSubmit() {
    this.user = this.myForm.value;
    console.log('before service ', this.user);
    this.adminService.addUser(this.user).subscribe((response) => {
      console.log('response from server', response);
      if(response==1){
        alert('User Added ');
      }else{
        alert('User Already Exist with Username = '+this.user.username);
      }
      this.router.navigate(['/get-all-user']);
    });
  }
}
