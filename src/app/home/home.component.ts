import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userDetails = {
    name: '',
    post: ''
  };
  submitForm(form: any): void {
    // if (form.valid) {
    //   console.log('Form data:', this.userDetails);
    // }lo

    console.log(this.userDetails);

  }

}
