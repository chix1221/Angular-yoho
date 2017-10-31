import { Component } from '@angular/core';
// import { LoginHeaderComponent} from '../header/login-header.component';
import { RegisterModel } from '../model/login-model';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public regModel: RegisterModel= new RegisterModel();

  constructor() {
  }

  CheckLogin() {
    if(this.regModel.userName==='feng' && this.regModel.password === '123'){
      console.log('hello feng !');
      console.log('login success!');
      location.href='./user';
    }else{
      alert('用户名或密码错误');
    }
  }
}
