import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { Userlist2Component } from './components/userlist2/userlist2.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:userid', component: AlbumsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:userid', component: PostsComponent },
  { path: 'comments/:postid', component: CommentsComponent },
  { path: 'userlist/:route', component: Userlist2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
