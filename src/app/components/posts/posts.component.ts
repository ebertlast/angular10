import { ActivatedRoute } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from './../../interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  postList: Post[] = [];
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
    this.postList = [];
    const self = this;
    this._globalService.getPostList(userId).subscribe({
      next(data) {
        self.postList = data;
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
