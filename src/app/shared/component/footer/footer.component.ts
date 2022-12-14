import { Component, OnInit } from '@angular/core';
import{faFacebook ,faSquareInstagram ,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook=faFacebook
  faSquareInstagram=faSquareInstagram
  faTwitter=faTwitter
  followUsInfo:any;
  loading:boolean=true;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getFollowUsInfo("http://127.0.0.1:8000/api/follow_us/list").subscribe((res)=>{
      // console.log(res.links);
       this.followUsInfo=res.links;
       this.loading=false;
      
     })
  }
 
  navigateFacebook(){
    window.open(this.followUsInfo.facebook,"_blank");

  }

  navigateTwitter(){
    window.open(this.followUsInfo.twitter,"_blank");

  }

  navigateInstagram(){
    window.open(this.followUsInfo.instagram,"_blank");


  }
}
