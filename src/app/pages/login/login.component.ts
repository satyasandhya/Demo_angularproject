import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show = false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router ) {
    this.loginForm = fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }

  ngOnInit() {
   
  }

  submitForm(): void {
    if(this.loginForm.valid){
      if(this.loginForm.value.username.toLowerCase() == "admin" && this.loginForm.value.password == "1234"){
      Swal.fire({
        icon:"success",
        text:"Login Successfully"
      })
      this.router.navigate(['welcome/dashboard']);

    }else{  
      Swal.fire({
      icon:"error",
      text:"Login Invalid"
      })
    }
   }
  console.log(this.loginForm.value)
  this.loginForm.reset();
}
}
