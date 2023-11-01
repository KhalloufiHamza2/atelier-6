import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ThisReceiver} from "@angular/compiler";

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent {

  ValideBool : boolean = false;

  myForm: FormGroup;
  showHiddenFields : boolean = false;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      idInput: ['', Validators.required],
      codeInput: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8}')]],
      LibelleInput: ['', [Validators.required, Validators.minLength(3)]],
      PrixInput: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
    });
  }


  validateAndShowFields() {
    if (this.myForm.valid) {
      this.showHiddenFields = true;
    }
  }

  updateValidateModif(){
    this.ValideBool=true;
  }




}
