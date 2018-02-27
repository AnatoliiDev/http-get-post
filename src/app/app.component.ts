import { Component } from '@angular/core';
import { AppService } from './AppService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css', "./app.component.css"]
})
export class AppComponent {
  
  users: any[];
  user = {
    name: "",
    tel: "",
    email: ""
  }

  constructor(public appService: AppService) {

    this.appService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSubmit() {
    this.appService.addUser(this.user).subscribe(user => {
      this.users.unshift(this.user);
    })
  }


}
