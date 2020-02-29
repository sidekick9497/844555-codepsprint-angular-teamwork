import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  appointmentList: Array<Customer> = new Array<Customer>();

  constructor(public customerService: AppointmentService) {
    this.customerService.getAllCustomers().subscribe((data: Array<Customer>) => {
      this.appointmentList = data;
      console.log(this.appointmentList);
    });
  }




  ngOnInit(): void {
  }

}
