import { Comment } from './../../interfaces/comment';
import { GlobalService } from './../../services/global.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  postid: number = 0;
  commentList: Comment[] = [];

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private _globalService: GlobalService
  ) {
    this.postid = +this.aRoute.snapshot.paramMap.get('postid');
  }

  ngOnInit(): void {
    if (this.postid < 0) this.router.navigate(['/']);
    var self = this;
    this._globalService.getCommentList(this.postid).subscribe({
      next(data) {
        self.commentList = data;
      },
      error(err) {
        self._globalService.displayAlert(err, 'danger');
      },
    });
  }
}
