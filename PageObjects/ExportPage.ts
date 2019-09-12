import { ElementFinder, $, element, by, } from "protractor"
export class Exportdata {

    CheckAll: ElementFinder;
    exportButton: ElementFinder;
    exportFile: ElementFinder;

    constructor() {
        this.CheckAll = $("input[id='checkAllRecords']");
        this.exportButton = element(by.xpath('//*[@id="exportRecordsLink"]'));
        this.exportFile = element(by.xpath('//*[@id="filetype"]'));

    }
}