import { Given, When, Then } from "cucumber";
import { Exportdata } from "../Pages/ExportPage";
import { browser, protractor } from "protractor";

let t3 = new Exportdata();


Given('The form has Data', { timeout: 2 * 90000 }, async () => {
    await browser.sleep(4000);
});

When('the {string} checkbox is selected', { timeout: 2 * 90000 }, async () => {
    await t3.CheckAll.click();
});

When(" Export {string} is selected", async () => {
    await t3.exportButton.sendKeys(protractor.Key.ENTER);
})

When("Export {string} is selected", async () => {
    await t3.exportButton.click();
})

Then('Download should begin', async () => {
    await t3.exportFile.click();

});