import { User } from './../../interfaces/user';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: User[] = [];
  constructor(private _globalService: GlobalService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    var self = this;
    this._globalService.getUserList().subscribe({
      next(data) {
        self.userList = data;
      },
      error(err) {
        self._globalService.displayAlert(err, 'danger');
      },
    });
  }
}
