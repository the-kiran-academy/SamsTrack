import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(private adminService: AdminService, private router: Router) {}

   users: any[] = [];

  ngOnInit() {
    this.adminService.getAllUsers().subscribe((list) => {
      this.users = list;
      if (this.users.length===0) {
        alert('User Not Exist');
      }
      this.router.navigate(['/admin-dashboard']);
    });
  }
}
