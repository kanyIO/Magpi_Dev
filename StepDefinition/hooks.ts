import { After, Before } from "cucumber";
import { browser } from "protractor";

Before({ tags: "@login" }, function () {
  browser.manage().window().maximize();
});

After({ tags: "@login" }, function () {
  console.log("Test is completed");
});

After({ tags: "@login" }, function () { // This hook will be executed after scenarios tagged with @foo
  console.log("Login test completed");
});

Before({ tags: "@search" }, function () { // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
  console.log("Search step has began");
});

After({ tags: "@search" }, function () {
  console.log("Search test completed");
});

Before({ tags: "@Export" }, function () {
  browser.manage().window().maximize();
});

After({ tags: "@Export" }, function () {
  console.log("Export test completed");
});