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
  update:boolean = false;
  edit:boolean = true;


  constructor(private userservice: UserService, private formBuilder: FormBuilder,private router:Router) { }

  // ngOnInit(): void {
  //   this.getData();
  // }
  ngOnInit() {
    this.getData();
    this.amortizationForm();
    
    // this.form = this.fb.group({
    //   products : this.fb.array([
    //     this.createProducts()
    //   ])
    // });
  }

  getData(){
    this.localdata = localStorage.getItem('userData');
    this.localdata= JSON.parse(this.localdata);
    // console.log(this.localdata,'localdata');
    var formData: any = new FormData();
    formData.append("token", 'e090c25187ee2b3f9f1f8a02747356641');
    formData.append("authToken", this.localdata.authToken);

    this.userservice.post(`getDynamicform`,formData).subscribe(res=>{
      console.log(res,'getDynamicform');
      res.data.forEach((element:any) => {
        var obj:any = {};
        var key = Object.keys(element);
        key.forEach((ele:any) => {
          obj[ele] = element[ele];
          this.addItem(obj);
          
          obj = {};
          
        });
      
        console.log(element,'elementvelementelementelement');
      });
      console.log(this.dynamicForm.value,'dynamicFormdynamicFormdynamicFormdynamicForm');
    });
  }

  

  createDynamicForm(element:any): FormGroup {
    console.log(element,'createDynamicFormcreateDynamicForm');
    return this.formBuilder.group(
      element
    );
  }


  amortizationForm() {
    this.dynamicForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
  }

  addItem(element:any) {
    console.log(this.dynamicForm.get('items'),'elementelement');
    this.items = this.dynamicForm.get('items') as FormArray;
    this.items.push(this.formBuilder.group({
      element
  }));
    // this.items.push(this.createDynamicForm(element));
    
    console.log(this.products,'this.itemsthis.itemsthis.items');
  }

  get products(): FormArray {
    return this.dynamicForm.get('items') as FormArray;
  }

  GetDynamicData(){

  }


  logOut(){
    localStorage.removeItem('userData');
    this.router.navigateByUrl('login');
  }

}
