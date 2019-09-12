import { Given, When, Then } from "cucumber";
import { login } from "../Pages/LoginPage";
import { SearchForm } from "../Pages/SearchPage";
import { Exportdata } from "../Pages/ExportPage";
import { browser, protractor } from "protractor";
import { async } from "q";



let t2 = new SearchForm();
let t1 = new login();
let t3 = new Exportdata();

Given('I access Magpi Dev', { timeout: 2 * 40000 }, async () => {
  (global as any).Angularsite(false);//non-Angular site
  await browser.get("http://datadyne-dev.com/login/auth");
});

When('I enter {string} and {string}', async (string, string2) => {
  await t1.firstEditBox.sendKeys(string);
  await t1.second.sendKeys(string2);
});

When('A {string} will occur', async (string) => {
  await t1.go.click();
  //await waitForUrlToChangeTo("http://datadyne-dev.com/forms-dashboard");
});

When('{string} is searched', { timeout: 2 * 40000 }, async (string) => {
  await browser.sleep(2000);  // there are two elements, so give it time to select one if not might get "WebDriverError: element not interactable"
  await t2.searchTextBox.clear();
  await t2.searchTextBox.sendKeys("Cervical_Cancer_Post_Test", protractor.Key.ENTER);

  await browser.sleep(2000);
});
Then('Open {string} form', { timeout: 2 * 40000 }, async (string) => {
  await t2.SelectForm.click();
  await t2.OpenForm.sendKeys(protractor.Key.ENTER);
  await browser.sleep(2000);
});


Given('The form has Data', async () => {
  return 'pending';  //Form should open in dataview
});

When('the "Select All" checkbox is selected', async () => {
  await t3.CheckAll.click();
});

When(" Export {string} is selected", async () => {
  await t3.exportButton.sendKeys(protractor.Key.ENTER);
})

When("'Export xlsx' is selected", async () => {
  await t3.exportButton.click();
})

Then('Download should begin', async () => {
  await t3.exportFile.click();

});