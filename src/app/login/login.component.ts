import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){

  }
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
      this.error = 'You have been locked out for 1 minute';
      setTimeout(() => {
        this.invalid = false;
      }, 60000);
    } else if (this.emailPattern.test(this.email) && this.password == 'Testpassw0rd1') {
      this.error = '';
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid email or password! You have ' + (3 - this.attempts) + ' attempts left';
    }
      
  }
}
