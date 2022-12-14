import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup  , Validators} from '@angular/forms';
import { HttpClient , HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { Router } from '@angular/router';
import { Report } from 'src/app/interface/report';
import { TokenService } from 'src/app/auth/service/token.service';

@Component({
  selector: 'app-report-form-user',
  templateUrl: './report-form-user.component.html',
  styleUrls: ['./report-form-user.component.css']
})
export class ReportFormUserComponent implements OnInit {
  form: FormGroup;
  errMsg:any;
  token:string;

  isLogin!:boolean;
  image=[];
  addata = new Report;
  isvalid = false;
  invalidForm:any;
  imgError:any;




  constructor(public fb: FormBuilder, private http: HttpClient , private rout:Router
    ,    private localstorage: TokenService,
    private _AuthGuard:AuthGuard) {
   
  }
  ngOnInit(): void {
    this.checkLogin();
    let local=this.localstorage.gettokenfromLocalstorage();
      let session=this.localstorage.getToken();
   
      if(local || session){
    this.form = this.fb.group({
      description: ['',[Validators.required]],
      url:[''],
      file:[''],
    
    });
  }else{
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\u06ff ]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\u06ff]*$')]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern('^01[0-2,5]{1}[0-9]{8}$'),Validators.minLength(11),Validators.maxLength(11)]],
      description: ['',[Validators.required]],
      url:[''],
      file:[''],
    
    });
  }
    this.invalidForm = this.form.status;

  }
  data=new FormData();

  onFileChange(event:any){

    console.log(this.form.value.file)
    console.log(event.target.files);
    console.log(event.target.files[0]['name']);
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let imagename=event.target.files[i];
        console.log(imagename);
        this.data.append('image[]',imagename,imagename.name)
        // this.image_name.push(imagename);
        var reader = new FileReader();
  
              reader.onload = (event:any) => {
                
              }
  
      }
  }
  console.log('array'+this.image)
  
  }
  

  submitForm() {
    if (this.form.status === 'INVALID') {
      // console.log('hello');
      this.isvalid = true;
      // console.log(this.isvalid);
    }else{
      let local=this.localstorage.gettokenfromLocalstorage();
      let session=this.localstorage.getToken();
   
      if(local || session){
    // this.data.append('name', this.form.get('name').value);
    // this.data.append('email', this.form.get('email').value);
    // this.data.append('phone', this.form.get('phone').value);
    this.data.append('url', this.form.get('url').value);
    this.data.append('description', this.form.get('description').value);
  

   if(local){
     console.log(local)
     this.token =local;
   }else if (session){
     console.log(session)
     this.token =session;

   }
  
   const headers = new HttpHeaders({

     'Authorization': `Bearer ${this.token}`
   });
    
    
    this.http
      .post('http://127.0.0.1:8000/api/contactUs/store', this.data,{headers:headers})
      .subscribe({
        next:(succ:any)=>{
        console.log("process is = " , succ);
        // this.localstorage.setsuccmessage(true);
        // console.log(this.localstorage.setsuccmessage(true));
   alert('?????? ?????????? ???????????? ??????????')
        this.rout.navigate(['/home']);
         
  
      },error:(error:HttpErrorResponse)=>{
  
        this.errMsg= error.error['error'];
        console.log(this.errMsg)
        if(this.errMsg.name){
          document.getElementById('name').textContent = this.errMsg.name
       }
        if(this.errMsg.email){
  
        document.getElementById('email').textContent = this.errMsg.email
        }
        if(this.errMsg.phone){
  
        document.getElementById('phone').textContent = this.errMsg.phone
        }
        if(this.errMsg.description){
  
        document.getElementById('description').textContent = this.errMsg.description
        }
      }
      })
    }else{
   this.data.append('name', this.form.get('name').value);
    this.data.append('email', this.form.get('email').value);
    this.data.append('phone', this.form.get('phone').value);
    this.data.append('url', this.form.get('url').value);
    this.data.append('description', this.form.get('description').value);
  

  
    
    this.http
      .post('http://127.0.0.1:8000/api/contactUs/store', this.data)
      .subscribe({
        next:(succ:any)=>{
        console.log("process is = " , succ);
        // this.localstorage.setsuccmessage(true);
        // console.log(this.localstorage.setsuccmessage(true));

        alert('?????? ?????????? ???????????? ??????????')
        this.rout.navigate(['/home']);         
  
      },error:(error:HttpErrorResponse)=>{
  
        this.errMsg= error.error['error'];
        console.log(this.errMsg)
        if(this.errMsg.name){
          document.getElementById('name').textContent = this.errMsg.name
       }
        if(this.errMsg.email){
  
        document.getElementById('email').textContent = this.errMsg.email
        }
        if(this.errMsg.phone){
  
        document.getElementById('phone').textContent = this.errMsg.phone
        }
        if(this.errMsg.description){
  
        document.getElementById('description').textContent = this.errMsg.description
        }
      }
      })
    }
      // .subscribe({
      //   next: (response) => console.log(response),
      //   error: (error) => console.log(error),
      // });
  }
  }

  checkLogin(){
    this._AuthGuard.isLogin.subscribe((res:any)=>{
      this.isLogin = res
    })
  }

}
