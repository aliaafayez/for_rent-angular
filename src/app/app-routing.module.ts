import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AddProperityComponent } from './components/add-properity/add-properity.component';
import { ListAllOwnerProperitiesComponent } from './components/list-all-owner-properities/list-all-owner-properities.component';
import { UpdateProperityAdvertisingComponent } from './components/update-properity-advertising/update-properity-advertising.component';
import { OwnerComponent } from './users/component/owner/owner.component';
import { AddAdminComponent } from './admin/component/add-admin/add-admin.component';
import { AdminsComponent } from './admin/component/admins/admins.component';
import { AdverRequestsComponent } from './admin/component/adver-requests/adver-requests.component';
import { OwnersComponent } from './admin/component/owners/owners.component';
import { RentersComponent } from './admin/component/renters/renters.component';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { HomeComponent } from './home/home.component';
import { CartDetailsComponent } from './shared/component/cart-details/cart-details.component';
import { EditpasswordComponent } from './shared/component/editpassword/editpassword.component';
import { EditpersonaldataComponent } from './shared/component/editpersonaldata/editpersonaldata.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AdminhomeComponent } from './admin/component/adminhome/adminhome.component';
import { ListcontactsComponent } from './admin/component/listcontacts/listcontacts.component';
import { NotRentedYetComponent } from './components/not-rented-yet/not-rented-yet.component';
import { PendingComponent } from './components/pending/pending.component';
import { RentedComponent } from './components/rented/rented.component';
import { MailConfirmComponent } from './auth/component/mail-confirm/mail-confirm.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { AuthGuard } from './guard/auth.guard';
import { MailverifiyGuard } from './guard/mailverifiy.guard';
import { PreventregisterandloginGuard } from './guard/preventregisterandlogin.guard';
import { CodeVerifyComponent } from './auth/component/code-verify/code-verify.component';
import { MailwithcodeComponent } from './auth/component/mailwithcode/mailwithcode.component';
import { ResetPasswordComponent } from './auth/component/reset-password/reset-password.component';
import { ReportsComponent } from './admin/component/reports/reports.component';
import { ReportsDetailsComponent } from './admin/component/reports-details/reports-details.component';
import { ReportFormUserComponent } from './components/report-form-user/report-form-user.component';
import { AboutFormComponent } from './admin/component/about-form/about-form.component';
import { FavouritsComponent } from "./components/favourits/favourits.component";

import { BlockListComponent } from './admin/component/block-list/block-list.component';

import { PayedproperitiesComponent } from './components/payedproperities/payedproperities.component';
// import { FollowUsComponent } from './admin/component/follow-us/follow-us.component';
import { RenterComponent } from './users/component/renter/renter.component';
import { AllOwnerHistoryComponent } from './shared/component/all-owner-history/all-owner-history.component';
import { FollowLinksComponent } from './admin/component/follow-links/follow-links.component';
import { TeamMembersComponent } from './admin/component/team-members/team-members.component';
import { AboutPolictyComponent } from './admin/component/about-policty/about-policty.component';
import { AboutPolictyUpdateComponent } from './admin/component/about-policty-update/about-policty-update.component';
import { AcceptedAdsComponent } from './admin/component/accepted-ads/accepted-ads.component';
import { RejecteddAdsComponent } from './admin/component/rejectedd-ads/rejectedd-ads.component';
import { PayedAdsComponent } from './admin/component/payed-ads/payed-ads.component';
import { AboutPolictyAddComponent } from './admin/component/about-policty-add/about-policty-add.component';
import {TeamMemberUpdateComponent } from './admin/component/team-member-update/team-member-update.component';
import { UserpayedRentedAdsComponent } from './components/userpayed-rented-ads/userpayed-rented-ads.component';
import { PendingDetailsComponent } from './admin/component/pending-details/pending-details.component';

import { FollowLinksUpdateComponent } from './admin/component/follow-links-update/follow-links-update.component';
import { EditPayedAdsforOwnerComponent } from './components/edit-payed-adsfor-owner/edit-payed-adsfor-owner.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },


  // auth Routes

  {
    path: "home", component: HomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  { path:"mailverifiy", component:MailConfirmComponent},
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "details/:id", component: CartDetailsComponent
  },

  {
    path: "allOwnerAdvertisments/:id", component: AllOwnerHistoryComponent
  },

  { path: 'reset-password-code', component: MailwithcodeComponent },
  { path: 'password', component: ResetPasswordComponent },



  { path:"mailverifiy", component:MailConfirmComponent,canActivate:[MailverifiyGuard]},

  {path: 'payed-for-user', component:UserpayedRentedAdsComponent,canActivate:[AuthGuard]},
  {path: 'forgetpassword', component:ForgetPasswordComponent},
  // shared Routes
  { path: 'editpassword', component: EditpasswordComponent ,canActivate:[AuthGuard]},
  {path:'editpersonaldata',component:EditpersonaldataComponent ,canActivate:[AuthGuard]},
  // user and admin ahared Routes
  { path: 'about', component:AboutComponent},
  { path: 'all-owner-properites', component: ListAllOwnerProperitiesComponent },
  //renter
  { path: 'renter', component: RenterComponent,canActivate:[AuthGuard] },

  // owner Routes

  { path: 'owner', component: OwnerComponent,canActivate:[AuthGuard] },
  { path: 'addProperity', component: AddProperityComponent,canActivate:[AuthGuard] },
  { path: 'edit-payed/:id', component: EditPayedAdsforOwnerComponent,canActivate:[AuthGuard] },
  { path: 'editproperty/:id', component: UpdateProperityAdvertisingComponent,canActivate:[AuthGuard] },
  { path:"notrented", component:NotRentedYetComponent,canActivate:[AuthGuard]},
  { path:"pending", component:PendingComponent,canActivate:[AuthGuard]},
  { path:"rented", component:RentedComponent,canActivate:[AuthGuard]},
  { path:"payed-rented", component:PayedproperitiesComponent,canActivate:[AuthGuard]},
  //start admin routes
  { path: 'adminhome', component:AdminhomeComponent,canActivate:[AuthGuard]},
  { path: 'all-contacts', component:ListcontactsComponent,canActivate:[AuthGuard]},
  {path: 'allAdmins', component: AdminsComponent,canActivate:[AuthGuard]},
  {path: 'allRenters', component: RentersComponent,canActivate:[AuthGuard]},
  {path: 'allOwners', component: OwnersComponent,canActivate:[AuthGuard]},
  {path: 'requests', component:AdverRequestsComponent,canActivate:[AuthGuard]},
  {path: 'addAdmin', component: AddAdminComponent,canActivate:[AuthGuard]},
  {path: 'reports-details', component: ReportsDetailsComponent,canActivate:[AuthGuard]},
  {path: 'allreports', component: ReportsComponent ,canActivate:[AuthGuard]},
  {path: 'aboutForm', component: AboutFormComponent ,canActivate:[AuthGuard]},
  {path: 'blockList', component: BlockListComponent,canActivate:[AuthGuard]},
  // {path: 'followForm', component: FollowUsComponent,canActivate:[AuthGuard]},
  {path: 'followShow', component: FollowLinksComponent,canActivate:[AuthGuard]},
  {path: 'team', component: TeamMembersComponent,canActivate:[AuthGuard]},
  {path: 'aboutPolicty', component: AboutPolictyComponent,canActivate:[AuthGuard]},
  {path: 'aboutPolictyUpdate', component: AboutPolictyUpdateComponent,canActivate:[AuthGuard]},
  {path: 'blockList', component: BlockListComponent,canActivate:[AuthGuard]},
  {path: 'accepted-ads', component: AcceptedAdsComponent,canActivate:[AuthGuard]},
  {path: 'rejected-ads', component: RejecteddAdsComponent,canActivate:[AuthGuard]},
  {path: 'payed-ads', component: PayedAdsComponent,canActivate:[AuthGuard]},
  {path: 'about-policty-add', component: AboutPolictyAddComponent,canActivate:[AuthGuard]},

  {path:'editteam/:id',component:TeamMemberUpdateComponent,canActivate:[AuthGuard]},
  { path: 'pendingDetails/:id', component:PendingDetailsComponent ,canActivate:[AuthGuard]},
  {path:'followForm',component:FollowLinksUpdateComponent,canActivate:[AuthGuard]},

  {
    path: "reportForm", component: ReportFormUserComponent
  },
  {
    path: "fav", component: FavouritsComponent
  },



  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
