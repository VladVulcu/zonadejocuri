import { Component, HostListener, OnDestroy, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription;

    constructor(public router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.userSub = this.authService.user.subscribe( user => {
            this.isAuthenticated = !!user;
        });
    }
    

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    onLogout() {
        this.authService.logout();
    }
 }