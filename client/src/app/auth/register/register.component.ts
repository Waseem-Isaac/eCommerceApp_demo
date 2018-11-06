import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/shared/services/authentication/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder : FormBuilder, public authService : AuthService, 
    private toastr: ToastrService,
    private router : Router
    ) { 
    this.createForm()
  }

  ngOnInit() {
  }

  register(){
    console.log(this.registerForm)

    this.authService.signUp(this.registerForm.value).subscribe((res: any) => {
      this.toastr.success('Registered in Successfully');
      this.registerForm.reset();

      this.router.navigate(['/auth/login'])
    }, (err: any) => {
      console.log(err);

    } )
  }

  //
  private createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ["", [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
      type : [null ],
    });
  }
}
