import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm!: FormGroup;
  otpVarifyForm!: FormGroup;

  name = 'Angular 5';
  show: boolean = false;
  public deploymentName: any;
  localdata: any;
  errorMsg: any;
  successMsg: any;
  invaildMsg: any;

  constructor(private fb: FormBuilder, private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
    this.createUserLogin();
    this.otpVarify();
    localStorage.removeItem('userData');
  }

  createUserLogin() {
    this.userLoginForm = this.fb.group({
      username: ['R003034', [Validators.required]],
      password: ['1234567', [Validators.required]]
    });
  }




  get f() { return this.userLoginForm.controls; }

  login() {
    let val = this.userLoginForm.value;
    var formData: any = new FormData();
    formData.append("username", val.username);
    formData.append("password", val.password);
    formData.append("token", 'e090c25187ee2b3f9f1f8a02747356641');
    this.userservice.post(`login`, formData).subscribe(res => {
      if (res.response == 2000) {
        if (res.twostep == 1) {
          // for two varifcation 
          // this.modelShow();
          // end two varifcation 

          // for testing section
          localStorage.setItem('userData', JSON.stringify(res));
          this.router.navigateByUrl('dashboard');
          //end testing section
        }
        if (res.twostep == 0) {
          localStorage.setItem('userData', JSON.stringify(res));
          this.router.navigateByUrl('dashboard');
        }
      }
      if(res.response == 2001){
        console.log(res.message,'dgffffds');
        this.invaildMsg = res.message;
      }
    });
  }


  // otp varify
  otpVarify() {
    this.otpVarifyForm = this.fb.group({
      otp: ['34210', [Validators.required]],
    });
  }
  get otp() { return this.otpVarifyForm.controls; }

  otpVarification() {
    this.localdata = localStorage.getItem('userData');
    this.localdata = JSON.parse(this.localdata);
    if (this.localdata) {
      let val = this.otpVarifyForm.value;
      var formData: any = new FormData();
      formData.append("otp", val.otp);
      formData.append("authToken", this.localdata.authToken);
      formData.append("token", 'e090c25187ee2b3f9f1f8a02747356641');
      this.userservice.post(`verifyOtp`, formData).subscribe(res => {
        if (res.response == 2000) {
          this.errorMsg = null;
          this.successMsg = res.message;
          localStorage.setItem('userData', JSON.stringify(res));
          this.router.navigateByUrl('dashboard');
        }
        if (res.response == 2001) {
          this.successMsg = null;
          this.errorMsg = res.message;
        }
      });
    } else {
      this.errorMsg = 'Please Try Again';
    }
  }

  modelShow() {
    jQuery("body").toggleClass('modal-open');
    jQuery('#exampleModal').toggleClass('show in display-b');
  }

}
