import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {PostsService} from '../shared/posts.service';

@NgModule({
  providers: [PostsService],
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class PostsModule { }
