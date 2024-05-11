import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainFunctionsApiService {
  optionHeader:any
  token:any

  constructor(private http:HttpClient) {
  }
  post(url:string,object:any){
    return this.http.post(url,object,this.optionHeader)
  }

  get(url:string){
    return this.http.get(url)
  }
  delete(url:string,id:any){
    return this.http.delete(`${url}/${id}`)
  }
  update(url:string,opject:any,id:any){
   return this.http.put(`${url}/${id}`,opject)
  }
  getById(url:string,id:any){
    return this.http.get(`${url}/${id}`) }
}
