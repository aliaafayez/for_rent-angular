import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminServiceService } from 'src/app/admin/service/admin-service.service';
import { Icontacts } from 'src/app/admin/service/contacts';
import { TokenService } from 'src/app/auth/service/token.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-not-rented-yet',
  templateUrl: './not-rented-yet.component.html',
  styleUrls: ['./not-rented-yet.component.css']
})
export class NotRentedYetComponent implements OnInit {
  token:any;
  length=0;
  dataSource=new MatTableDataSource<Icontacts>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  displaycolumns:string[]=['الاعلان','action']
  constructor(private localstorage:TokenService,private AdminService:AdminServiceService ,private http:HttpClient, private owner:OwnerService,private localstoage:TokenService) {
  }

  ngOnInit(): void {
    this.getallPending();

  }


  getallPending(){
    let local=this.localstoage.gettokenfromLocalstorage();
    let session=this.localstoage.getToken();

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
      let pending ='http://127.0.0.1:8000/api/notrented_advertisement';
      this.owner.getPending(pending,headers).subscribe(data=>{
        console.log(data)
        this.length=data[0].length
        console.log(this.length)
        this.dataSource=new MatTableDataSource(data[0]);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },error=>{
        console.log(error)
      })

  }

  findContact(value:string){
    this.applyFilter(value);

  }

  applyFilter(filter:string){
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter =filter;


  }

  delete(id:any){
    if (confirm('هل تريد مسح الاعلان؟')){
    let local=this.localstorage.gettokenfromLocalstorage();
    let session=this.localstorage.getToken();

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
    this.http.delete('http://127.0.0.1:8000/api/advertisement/'+id,{headers:headers}).subscribe((res)=>{
      console.log(res)
    },
    (error)=>{
      console.log(error)
    })
  }
    this.getallPending();

  }

}
