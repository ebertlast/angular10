import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private appUrl = 'http://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getUserList(): Observable<any> {
    return this.http.get(this.appUrl + 'users');
  }

  getAlbumList(userId: number): Observable<any> {
    return this.http.get(this.appUrl + 'user/' + userId + '/albums');
  }

  getPostList(userId: number): Observable<any> {
    return this.http.get(this.appUrl + 'user/' + userId + '/posts');
  }

  getCommentList(postId: number): Observable<any> {
    return this.http.get(this.appUrl + 'posts/' + postId + '/comments');
  }

  displayAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert" style="margin-top: 1rem;">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="document.getElementById(\'liveAlertPlaceholder\').innerHTML=\'\'"></button>',
      '</div>',
    ].join('');

    document.getElementById('liveAlertPlaceholder').append(wrapper);
  };
}
