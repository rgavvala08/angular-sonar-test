import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      surname: new FormControl(''),
      forename: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(),
    });
  }

  public recieveData(): void {
    console.log("data", this.formGroup.value);
    return this.formGroup?.value;
  }

  public resetDataInChild(): void {
    this.formGroup.reset();
  }

}
