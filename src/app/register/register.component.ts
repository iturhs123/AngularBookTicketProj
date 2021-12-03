import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { UserDetail } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  flag: boolean = true;

  @Output() onSubmitting = new EventEmitter();

  // @Output() shareEvent = new EventEmitter<boolean>();
  //isValid: boolean = false;
  isInvalid!: number;

  constructor(public service: RegisterService, private router: Router) { }



  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new UserDetail();
  }

  book(e: any) {
    this.onSubmitting.emit(this.flag);
  }
  // onSubmit(form: NgForm) {

  //   this.onSubmitting.emit();

  //   this.insertRecord(form);

  // }
  insertRecord(form: NgForm) {
    this.service.postRegisterUser().subscribe(
      res => {
        localStorage.setItem('key', 'true');
        this.resetForm(form);
        //this.service.refreshList();
        this.router.navigate(['showRegister']);
        console.log("found");
      },
      err => { console.log(err); }
    )
  }
  onSubmit(form: NgForm) {
    let name = ((document.getElementById('userName')) as HTMLInputElement)?.value;
    let phoneNo = ((document.getElementById('phoneNo')) as HTMLInputElement)?.value;
    let age = parseInt(((document.getElementById('age')) as HTMLInputElement)?.value);
    let email = (((document.getElementById('emailId')) as HTMLInputElement)?.value);

    
    if (name == null || name == '') {
      this.isInvalid = 1;
      ((document.getElementById('invalidName')) as HTMLInputElement).innerHTML = '<span style="color:red"> Please Enter User Name </span>';
    }
    if (phoneNo.length !== 10) {
      this.isInvalid = 1;
      ((document.getElementById('invalidPhone')) as HTMLInputElement).innerHTML = '<span style="color:red"> Please Enter 10 digit Phone Number </span>';
    }
    // if(form.value.age<18 || form.value.age == null ){
    //   ((document.getElementById('invalidAge')) as HTMLInputElement).innerHTML = '<span style="color:red"> Age should be more than 18 </span>';

    // }
    if (age < 18 || age == null ) {
      this.isInvalid = 1;
      ((document.getElementById('invalidAge')) as HTMLInputElement).innerHTML = '<span style="color:red"> Age should be more than 18 </span>';
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      this.isInvalid = 1;
      ((document.getElementById('invalidEmail')) as HTMLInputElement).innerHTML = '<span style="color:red"> Please Enter valid Email Id </span>';
    }
    else {
      this.isInvalid = 2;
     
    }
    if(this.isInvalid === 2) {
      this.onSubmitting.emit();
      this.insertRecord(form);
      this.flag = false;
      alert("Now You can your select movies")
    }
    //alert("Thanks For selecting movie")
  }

}
