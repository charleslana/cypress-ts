import { BeforeAll, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { YamanPage } from './page-objects/yaman.page';

let yamanPage: YamanPage;

BeforeAll(() => {
  yamanPage = new YamanPage();
});

Given('I visit app', () => {
  yamanPage.openApp();
});

When('I click contact menu', () => {
  yamanPage.clickContactMenu();
});

When('I fill name', () => {
  yamanPage.fillName();
});

When('I fill email', () => {
  yamanPage.fillEmail();
});

When('I fill subject', () => {
  yamanPage.fillSubject();
});

When('I fill message', () => {
  yamanPage.fillMessage();
});

When('I click send button', () => {
  yamanPage.sendContact();
});

Then('I should see a success message', () => {
  yamanPage.seeMessage();
});

Given('I visit app with viewport mobile', () => {
  yamanPage.setViewport();
});

Then('I should see a mobile menu', () => {
  yamanPage.seeMobileMenu();
});
