import { Given, When, Then } from "cucumber";
import { SearchForm } from "../Pages/SearchPage";
import { browser, protractor } from "protractor";
import { async } from "q";

let t2 = new SearchForm();

Given('I am on the forms dashboard', async () => {
  await browser.get("http://datadyne-dev.com/forms-dashboard");
});

When('{string} is searched', { timeout: 3 * 80000 }, async (string) => {
  await browser.sleep(2000);  // there are two elements, so give it time to select one if not might get "WebDriverError: element not interactable"
  await t2.searchTextBox.clear();
  await t2.searchTextBox.sendKeys("Cervical_Cancer_Post_Test", protractor.Key.ENTER);
  await browser.sleep(4000);
});
Then('Open {string} form', { timeout: 3 * 90000 }, async (string) => {
  // await browser.actions().click(t2.SelectForm).sendKeys(protractor.Key.ENTER);

  await t2.SelectForm.click();
  await t2.OpenForm.sendKeys(protractor.Key.ENTER);
  await browser.sleep(4000);
});

