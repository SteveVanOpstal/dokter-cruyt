import {HttpClient} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';


const DEFAULT = 'Loading..';

@Component({selector: 'pc-admin', templateUrl: 'admin.component.html'})
export class AdminComponent implements OnInit, OnDestroy {
  dataForm = this.fb.group({
    title: [DEFAULT, Validators.required],
    contact: this.fb.group({
      address: this.fb.group(
          {street: [DEFAULT, Validators.required], city: [DEFAULT, Validators.required]}),
      tel: [DEFAULT, Validators.required],
      fax: [DEFAULT],
      appointmentLink: [DEFAULT, Validators.required]
    }),
    remarks: [DEFAULT],
  });

  subscription: Subscription;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.subscription = this.http.get('/api/data').subscribe((data) => {
      this.dataForm.setValue(data);
    });
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  submit() {
    this.http.post('/api/data', this.dataForm.value)
        .subscribe(
            () => {

            });
  }
}
