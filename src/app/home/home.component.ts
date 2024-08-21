import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: any = []
  updateFlag: boolean = false
  userDetails = {
    id: 0,
    name: '',
    post: ''
  };

  submitForm(form: any): void {
    if (!this.userDetails.name || !this.userDetails.post) {
      alert('please enter details');
      return;
    }
    if (this.updateFlag) {
      let d = this.posts.filter((data: any) => data.id !== this.userDetails.id)
      console.log(d);
      this.userDetails = {
        ...this.userDetails,
        name: '',
        post: ''
      }
      this.updateFlag = false

    } else {
      this.userDetails.id = this.userDetails.id + 1
      this.posts.push(this.userDetails)
      this.userDetails = {
        id: this.userDetails.id,
        name: '',
        post: ''
      }
    }

    console.log(this.posts);
  }

  deletePost(form: any) {
    this.posts = this.posts.filter((data: any) => data.id !== form.id)
  }

  updatePost(form: any) {
    this.userDetails = form
    this.updateFlag = true
  }

}
