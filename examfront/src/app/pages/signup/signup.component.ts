import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor(private userService:UserService, private snackBar: MatSnackBar) { }

  public user={

    username: '',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''

  };

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);

    if(this.user.username=='' || this.user.username==null){
      //alert("User name is required!!!!");
      this.snackBar.open("User Name is required!!!",'OK',{
        duration: 3000, 
      });
      return ;
    }

    if(this.user.password=='' || this.user.password==null){
    
      this.snackBar.open("Password is required!!!",'OK',{
        duration: 3000, 
      });
      return ;
    }

    if(this.user.firstName=='' || this.user.firstName==null){
    
      this.snackBar.open("first Name is required!!!",'OK',{
        duration: 3000, 
      });
      return ;
    }
    if(this.user.lastName=='' || this.user.lastName==null){
    
      this.snackBar.open("last Name is required!!!",'OK',{
        duration: 3000, 
      });
      return ;
    }
    if(this.user.email=='' || this.user.email==null){
    
      this.snackBar.open("Email is required!!!",'OK',{
        duration: 3000, 
      });
      return ;
    }
    if(this.user.phone=='' || this.user.phone==null){
      this.snackBar.open("Phone Number is required!!!",'OK',{
        duration: 3000, 
      });
      return ;
    }

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
       // alert("Success!!!");
       Swal.fire('Success', 'User is registered!','success');
      },
      (error)=>{
        console.log(error);
       // alert("Something went wrong");

      this.snackBar.open("Something went wrong!!",'OK',{
          duration: 3000, 
        });
   
      
      }
    )
  }



}
