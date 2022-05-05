import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') form: NgForm;
  formSubmitSuccess = false;

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
    if (this.form.valid) {
      const name = this.form.value.name;
      const email = this.form.value.email;
      const message = this.form.value.message;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xyyobbgq',
      { name: this.form.value.name, message: this.form.value.message, replyto: this.form.value.email,},
      {'headers': headers }).subscribe();

      this.form.reset();
      this.formSubmitSuccess = true;
  }

}

