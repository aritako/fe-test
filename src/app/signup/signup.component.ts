import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router){

  }
  name : string = ''
  email : string = ''
  password : string = ''
  cpassword: string = ''
  error : string = ''
  invalid: boolean = false;
  private emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  submit(){
    if (this.name == '' || this.email == '' || this.password == '' || this.cpassword == ''){
      alert('Please fill out all fields')
      return;
    }

    if(!this.emailPattern.test(this.email)){
      this.error = 'Invalid email address';
      return;
    }

    if (this.password.length < 8) {
      this.error = 'Password must be at least 8 characters long';
      return;
    }

    if (!/[A-Z]/.test(this.password)) {
      this.error = 'Password must include at least one uppercase character';
      return;
    }

    if (!/\d/.test(this.password)) {
      this.error = 'Password must include at least one number';
      return;
    }

    if (!/[!@#$%^&*]/.test(this.password)) {
      this.error = 'Password must include at least one special character';
      return;
    }

    if (this.password.includes('@')) {
      this.error = 'Password cannot include the "@" character';
      return;
    }

    if(this.password != this.cpassword){
      this.error = 'Passwords do not match!';
      return;
    }
    this.router.navigate(["/home"])
  }
}

