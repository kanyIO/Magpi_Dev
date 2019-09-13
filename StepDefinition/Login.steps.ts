import { Given, When, Then } from "cucumber";
import { login } from "../Pages/LoginPage";
import { browser } from "protractor";

let t1 = new login();

Given('I access Magpi Dev', { timeout: 60000 }, async () => {
  (global as any).Angularsite(false);//non-Angular site
  await browser.get("http://datadyne-dev.com/login/auth");
});

When('I enter {string} and {string}', async (string, string2) => {
  await t1.firstEditBox.sendKeys(string);
  await t1.second.sendKeys(string2);
});

When('A {string} will occur', async (string) => {
  await t1.go.click();
});
