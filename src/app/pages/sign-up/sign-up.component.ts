import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService, AlertService } from 'src/app/shared/services';
import { first } from 'rxjs/operators';
import * as jQuery from 'jquery';
window['$'] = jQuery;

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

   // variable
  show: boolean;
  registerForm: FormGroup;
    loading = false;
    submitted = false;


  constructor(private route: ActivatedRoute,
    private title: Title,
    private meta: Meta, private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
  // initialize variable value
   this.show = false;
    // redirect to home if already logged in
    if (this.userService.currentUserValue) {
      this.router.navigate(['/']);


  }


  }

  // click event function toggle
  password() {
   this.show = !this.show;
  }


  ngOnInit() {


    this.title.setTitle( this.route.snapshot.data['title']);
    this.registerForm = this.formBuilder.group({
      // firstName: ['', Validators.required],

      nom: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });


}



  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.signUp(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Registration successful', true);
                  this.router.navigate(['/home/one']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }


}
