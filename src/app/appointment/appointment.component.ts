import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppointmentService } from '../service/appointment.service';
import { Router } from '@angular/router';
import { Customer } from '../models/customer.model';




@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  customerFormGroup: FormGroup;
  constructor(formBuilder: FormBuilder, public customerService: AppointmentService, public router: Router) {

    this.customerFormGroup = formBuilder.group(
      {
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            city: new FormControl(''),
            address: new FormControl(''),
            trainer: new FormControl(''),
            cost: new FormControl('')
      }
    );
    }
    onSubmit() {
      console.log('form submitted');
      console.log(this.customerFormGroup.controls.firstName.value );
      const firstName = this.customerFormGroup.controls.firstName.value;
      const lastName = this.customerFormGroup.controls.lastName.value;
      const name = firstName + ' ' + lastName;
      const city = this.customerFormGroup.controls.city.value;
      const address = this.customerFormGroup.controls.address.value;
      const trainer = this.customerFormGroup.controls.trainer.value;
      const cost = this.customerFormGroup.controls.cost.value;
      console.log('details ' + firstName + ' ' + lastName + '' + city + ' ' + address + ' ' + trainer + '' + cost);
      const customer = new Customer(name, address, city, cost, trainer, 123);
      this.customerService.save(customer).subscribe(() => {
        console.log('data added');
      });

    }

  ngOnInit() {




  }



}
