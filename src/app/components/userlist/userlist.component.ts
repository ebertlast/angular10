import { User } from './../../interfaces/user';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  html: string = '';

  constructor(private _globalService: GlobalService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    var self = this;
    this._globalService.getUserList().subscribe({
      next(data) {
        var html = `<table class="table table-hover mt-3"><thead><tr><th>Id</th><th>Nombre</th><th>Email</th></tr></thead><tbody>`;
        data.forEach((el) => {
          html += `<tr><td>${el.id}</td><td><button class="btn btn-link" onclick="emitId(${el.id})">${el.name}</button></td><td>${el.email}</td></tr>`;
        });
        html += `</tbody></table>`;

        self.html = html;
      },
      error(err) {
        self._globalService.displayAlert(err, 'danger');
      },
    });
  }

  emitId(id: any) {
    alert(id);
  }

  showList() {
    Swal.fire({
      title: '<strong>Usuarios</strong>',
      html: this.html,
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      cancelButtonText: 'Cancelar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  }
}
