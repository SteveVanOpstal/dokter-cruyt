import {HttpClient} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';
import {Subscription} from 'rxjs';


const DEFAULT = '';

interface Dokter {
  title: string;
  picture: string;
  appointmentLink: string;
}

@Component({
  selector: 'dc-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  dataForm = this.fb.group({
    title: [DEFAULT, Validators.required],
    dokters: this.fb.array([]),
    contact: this.fb.group({
      address: this.fb.group(
          {street: [DEFAULT, Validators.required], city: [DEFAULT, Validators.required]}),
      tel: [DEFAULT, Validators.required],
      fax: [DEFAULT]
    }),
    remarks: [DEFAULT]
  });

  subscription: Subscription;

  get dokters(): FormArray { return this.dataForm.get('dokters') as FormArray; }

  addDokter(dokter: Dokter = {title: '', picture: '', appointmentLink: ''}) {
    this.dokters.push(
      this.fb.group({
        title: [dokter.title, Validators.required],
        picture: [dokter.picture, Validators.required],
        appointmentLink: [dokter.appointmentLink, Validators.required]
      }));
  }

  setDokters(dokters: Dokter[]) {
    for (const dokter of dokters) {
      this.addDokter(dokter);
    }
  }

  setForm(data: any) {
    this.dataForm.get('title').setValue(data.title);
    this.setDokters(data.dokters);
    this.dataForm.get('contact').setValue(data.contact);
    this.dataForm.get('remarks').setValue(data.remarks);
  }

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.subscription = this.http.get('/api/data').subscribe((data) => {
      this.setForm(data);
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
