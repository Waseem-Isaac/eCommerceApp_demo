import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@app/shared/services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = null;
  constructor(private formBuilder : FormBuilder,
     public authService : AuthService, 
     private toastr: ToastrService,
     private router : Router
     ) { 
    this.createForm()
  }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm)

    this.authService.signIn(this.loginForm.value).subscribe((res: any) => {
      this.toastr.success('Logged in Successfully');
      this.loginForm.reset();
      this.router.navigate(['/'])
    }, (err: any) => {
      console.log(err)
      this.error=  err.error.error;
    } )
  }

  //
  private createForm() {
    this.loginForm = this.formBuilder.group({
      // email: ["", [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      
      username: ['',Validators.required],
      password: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
      remember: true
    });
  }
}
