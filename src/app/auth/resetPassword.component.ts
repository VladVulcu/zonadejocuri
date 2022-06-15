import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-reset-pass',
    templateUrl: './resetPassword.component.html',
    styleUrls: ['./resetPassword.component.css']
})

export class ResetPassComponent {

    error = false;
    formSubmitSuccess = false;
    isLoading = false;

    constructor(private authService: AuthService, private router: Router) {}

    onPassChange(form: NgForm) {
        const email = form.value.email;
        this.isLoading = true;
        this.authService.passwordChange(email).subscribe(resp => {
            this.isLoading = false;
        }, errorMessage => {
            this.error = errorMessage;
            this.isLoading = false;
        });
        this.formSubmitSuccess = true;

        form.reset();
        this.error = false;
    }

    navigateBack() {
        this.router.navigate(['games']);
    }
}