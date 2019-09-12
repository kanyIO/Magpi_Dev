import { $, ElementFinder, browser, element, by } from "protractor";

export class SearchForm {
    currentUrl: ElementFinder;
    searchTextBox: ElementFinder;
    SelectsearchButton: ElementFinder;
    SelectForm: ElementFinder;
    OpenForm: ElementFinder;

    constructor() {
        this.currentUrl = element(by.linkText("http://datadyne-dev.com/login/"));
        this.searchTextBox = $("input[class='field']");
        this.SelectsearchButton = element(by.css('input.submit'));
        this.SelectForm = element(by.xpath('//*[@id="tr_form_17857"]/td[2]'));
        this.OpenForm = element(by.id('editFormLink'));
    }
}