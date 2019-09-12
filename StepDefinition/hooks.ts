import {After,Before} from "cucumber";
import { browser } from "protractor";

Before({tags: "@login"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
});

After({tags: "@login"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
  });






