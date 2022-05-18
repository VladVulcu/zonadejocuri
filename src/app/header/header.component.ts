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
    width: number;
    lower = 0;
    constructor(public router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.userSub = this.authService.user.subscribe( user => {
            this.isAuthenticated = !!user;
        });
    }
    
    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.width = window.innerWidth;
        if (this.width < 500) {
            this.lower = 1;
        }
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    onLogout() {
        this.authService.logout();
    }
 }