import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [  {path: '', redirectTo: 'home', pathMatch: 'full'},
                          {path: 'home', component: HomeComponent},
                          {path: 'appointment', component: AppointmentComponent},
                          {path: 'viewappointment', component: ViewAppointmentComponent},
                          {path: 'contactus', component: ContactUsComponent},
                          {path: '**', component: NotFoundComponent}
                        ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
