import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  isActivated = false;
  constructor() {}

  ngOnInit() {
    this.userService.activatedEmitter.subscribe(
      (didActivate)=>this.isActivated = didActivate)
  }
}
