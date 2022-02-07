import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dynamicForm!: FormGroup;
  items!: FormArray;
  localdata: any;
  update: boolean = false;
  edit: boolean = true;
  survey!: FormGroup;


  constructor(private userservice: UserService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
    this.getData();
  }

  getData() {
    this.localdata = localStorage.getItem('userData');
    this.localdata = JSON.parse(this.localdata);
    var formData: any = new FormData();
    formData.append("token", 'e090c25187ee2b3f9f1f8a02747356641');
    formData.append("authToken", this.localdata.authToken);

    this.userservice.post(`getDynamicform`, formData).subscribe(res => {
      res.data.forEach((element: any) => {
        var obj: any = {};
        var key = Object.keys(element);
        key.forEach((ele: any) => {
          obj[ele] = element[ele];
          this.addItem(obj, ele);
          obj = {};
        });
      });
    });
  }


  addItem(element: any, key: string) {
    this.items = this.dynamicForm.get('items') as FormArray;
    const value: any = this.getFrom(element[key]);
    this.items.push(this.formBuilder.group({ [key]: new FormArray(value) }));
  }


  getFrom(element: any) {
    const eleArr: any = [];
    element.forEach((ele: any) => {
      const a = this.formBuilder.group(ele);
      eleArr.push(a);
    });
    return eleArr;
  }

  get products(): FormArray {
    return this.dynamicForm.get('items') as FormArray;
  }

  getControl(control: any) {
    return this.dynamicForm.get(control) as FormArray;
  }

  getSecondControl(formGroup: any, i: number) {
    const key = Object.keys(formGroup.controls)[0];
    return formGroup.controls[key].controls;
  }

  getFromGroup(formGroup: any, i: number) {
    const key = Object.keys(formGroup.controls)[0];
    return key;
  }

  getThirdControl(item: any, j: any) {
    const arr: any = [];
    Object.keys(item.controls).map((x) => {
      arr.push({ [x]: item.controls[x] });
    })
    return arr;
  }

  logOut() {
    localStorage.removeItem('userData');
    this.router.navigateByUrl('login');
  }


}