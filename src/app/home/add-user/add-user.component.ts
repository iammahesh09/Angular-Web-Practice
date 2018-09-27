import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDatashareService } from '../../services/user-datashare.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  submitted = false;
  UserDataSend: any = {
    username: '',
    email: '',
    phone: ''
  };

  constructor(private _formBuilder: FormBuilder, private _dataShare: UserDatashareService) { }

  ngOnInit() {

    this.addUserForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });

  }

  get userForm() {
    return this.addUserForm.controls
  }

  onSubmit() {
    this.submitted = true;

    if (this.addUserForm.invalid) {
      return;
    } else {
      this.UserDataSend = this.addUserForm.value;
      this._dataShare.setData(this.UserDataSend);
    }

    //Reset Form
    this.addUserForm.reset()
  }

}
