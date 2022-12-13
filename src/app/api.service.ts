import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee = (data:any) =>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }

  getEmployee = ()=>{
    return this.http.get("http://localhost:8080/viewAllEmployee")
  }

  searchEmployee = (data:any)=>{
    console.log(data)
    return this.http.post("http://localhost:8080/searchEmployee", data)
  }

  deleteEmployee = (data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee", data)
  }

  updateEmployee = (data:any)=>{
    return this.http.post("http://localhost:8080/editEmployee", data)
  }
  
  getEmpById = (data:any)=>{
    return this.http.post("http://localhost:8080/employeeProfile", data)
  }

  addSecurity = (data:any)=>{
    return this.http.post("http://localhost:8080/addSecurity", data)
  }
}
