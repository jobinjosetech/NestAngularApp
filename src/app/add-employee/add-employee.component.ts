import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private api:ApiService){}
  empCode=""
  empName=""
  empEmail=""
  empPhone=""
  empDesignation=""
  username=""
  password=""

  readValues = ()=>{
    let data:any = {
      "empCode": this.empCode,
      "name": this.empName,
      "email": this.empEmail,
      "phone": this.empPhone,
      "designation": this.empDesignation,
      "username": this.username,
      "password": this.password
   }
   this.api.addEmployee(data).subscribe(
    (response:any)=>{
      if(response.status=="success"){
        this.empCode=""
        this.empName=""
        this.empEmail=""
        this.empPhone=""
        this.empDesignation=""
        this.username=""
        this.password=""
        alert("Employee Added Successfully")
      }else{
        alert("Error in adding employee")
      }
    }
   )
  }
}
