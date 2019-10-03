import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  edit: boolean = false;
  users : any = [];


  constructor(private fb: FormBuilder, private router: Router,
    private activedRoute: ActivatedRoute, private userservice  : UserService) {

  }

  // Form Validator
  ngOnInit() {

  }

}
