import { Router } from "@angular/router";

import { inject } from "@angular/core";
import Icon from "./icon.entity";
import Image from "./image.entity";

export default class RedirectIcon extends Icon{

    private redirect: boolean;

    private redirect_route: string;

    private readonly router: Router;

    constructor(label: string,redirect: boolean, redirect_route: string, image: Image) {
        super(label,image);
        this.redirect = redirect
        this.redirect_route = redirect_route
        
        this.router = inject(Router);
    }

    navigate() {
        if(this.redirect == true){
        this.router.navigate([this.redirect_route])
        } else {
            throw new Error('Unnable to redirect')
        }
    }

    setRedirect(redirect: boolean):void {
        this.redirect = redirect;
    }

    getRedirect():boolean {
        return this.redirect;
    }

    setRedirectRoute(redirect_route: string):void {
        this.redirect_route = redirect_route;
    }

    getRedirectRoute():string {
        return this.redirect_route;
    }

}