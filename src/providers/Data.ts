import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthenticationServiceProvider} from "../providers/authentication-service/authentication-service";

@Injectable()
export class Data {
 
    public students: any;
    public quizes: any;    
    items: any;
    responseData: any;
 
    constructor(private http: Http,public authenticationServiceProvider: AuthenticationServiceProvider) {
        //this.initializeItems();

        this.authenticationServiceProvider.postData("", "AllStudentDetails").then((result) => {
            this.responseData = result;
            //console.log(this.responseData);
    
            if (this.responseData.studentList)
            {
                this.items = this.responseData;
                this.students = this.items;
                localStorage.setItem('studentList', JSON.stringify(this.students));
            }else{
                console.log('not working');
            }
    
          }, (err) => {
            console.log("Didn't work fool");
          });
        var data3 = JSON.parse(localStorage.getItem('studentList'));
        this.students = data3;
    }
    
    filterItems(searchTerm){

        return this.students.studentList.filter((student) => {
            return student.username.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
    }

}