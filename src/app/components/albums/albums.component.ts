import { ActivatedRoute } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Albums } from './../../interfaces/albums';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  albumList: Albums[] = [];
  constructor(
    private readonly fb: FormBuilder,
    private _globalService: GlobalService,
    private aRoute: ActivatedRoute
  ) {
    this.searchForm = this.fb.group({
      userId: ['', [Validators.required]],
    });
    const userId = this.aRoute.snapshot.paramMap.get('userid');
    if (userId) {
      this.searchForm.patchValue({
        userId: userId
      })
      setTimeout(() => {
        this.onSubmit()
      }, 200);
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    const userId: number = this.searchForm.get('userId')?.value;
    if (userId <= 0) return;
    this.loading = true;
    this.albumList = [];
    const self = this;
    this._globalService.getAlbumList(userId).subscribe({
      next(data) {
        self.albumList = data;
      },
      error(err) {
        self._globalService.displayAlert(err, 'danger');
      },
      complete() {
        self.loading = false;
      },
    });
  }
}
