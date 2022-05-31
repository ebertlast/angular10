import { GlobalService } from './../../services/global.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlist2',
  templateUrl: './userlist2.component.html',
  styleUrls: ['./userlist2.component.scss'],
})
export class Userlist2Component implements OnInit {
  userList: User[] = [];
  route: string = "";
  constructor(
    private _globalService: GlobalService,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserList();
    if (this.aRoute.snapshot.paramMap.get('route')) {
      this.route = "/"+this.aRoute.snapshot.paramMap.get('route')!;
    }
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
