

import {ElementFinder, element,by} from "protractor";

export class login {

    firstEditBox:ElementFinder;
    second: ElementFinder;
    go:ElementFinder;

    constructor()
    {
       this.firstEditBox = element(by.name("j_username"));
       this.second=element(by.name("j_password"));
       this.go=element(by.css("button.btn.btn-lg.btn-primary.btn-block.btn-signin"));

    }
}