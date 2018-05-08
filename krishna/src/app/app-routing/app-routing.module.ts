import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components

import {WelcomeComponent} from '../welcome/welcome.component';
import {AboutComponent} from '../about/about.component';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {AchievementsComponent} from '../achievements/achievements.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component'


const routes: Routes = [
    {path:'home', component:WelcomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactFormComponent},
    {path:'achievements', component:AchievementsComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}