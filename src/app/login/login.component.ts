import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;
  
  constructor(private http: HttpClient, private router: Router){
    this.loginObj = new Login();
  }
onLogin(){

  this.http.post('',this.loginObj).subscribe((res:any) =>{ // '' közé jön az adatbázis elérése
    if(res){
      alert("Login successful")
      this.router.navigate(['/home.private']); // Az oldalra navigál a privát home  címre
     } else {
      alert(res.massage)
     }
    })
  }
}


export class Login{

  Email: string;
  Password: string;
  constructor(){
    this.Email = '';
    this.Password = '';
  }
}