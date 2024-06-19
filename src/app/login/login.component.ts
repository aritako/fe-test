import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = ''
  password : string = ''
  error : string = ''
  attempts : number = 0
  invalid: boolean = false;
  private emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  submit(){
    this.attempts += 1
    if (this.attempts == 3){
      this.invalid = true;
      setTimeout(() => {
        this.invalid = false;
      }, 60000);
    }
    if (!this.emailPattern.test(this.email)) {
      this.error = 'Invalid email or password! You have ' + (3 - this.attempts) + ' attempts left';
    } else {
      this.error = '';
      // Proceed with form submission or further processing
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
}
