import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { ShoppingCartPage } from '../pages/shoppingCartPage';
import { HeadlightsPage } from '../pages/headlightsPage';
import { LoginRegisterPage } from '../pages/loginRegisterPage';

test('check shopping cart', async ({page}) =>{
    const mainPage = new MainPage(page);

    await mainPage.goToMainPage();
    await mainPage.checkIfCartIsEmpty();
});

test('register a new account', async ({page}) =>{
    const registerPage = new LoginRegisterPage(page);
    const mainPage = new MainPage(page);

    await mainPage.goToMainPage();
    await mainPage.goToLoginPage();
    await registerPage.enterName("Dima");
    await registerPage.enterSurname("Loban");
    await registerPage.enterRegistrationEmail("DimaL@gmail.com");
    await registerPage.enterAndConfirmPassword("auto9876!");
    await registerPage.agreeToConditions();
});

test("login, add an item and proceed to checkout", async ({page}) =>{
    const registerPage = new LoginRegisterPage(page);
    const mainPage = new MainPage(page);
    const headlightsPage = new HeadlightsPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    await mainPage.goToMainPage();
    await mainPage.goToLoginPage();
    await registerPage.enterLoginEmail("");
    await registerPage.enterPassword("");
    await registerPage.clickLoginButton();
    await registerPage.returnToMainPage();
    await mainPage.checkIfCartIsEmpty();
    await mainPage.openAutolightsMenu();
    await mainPage.clickHeadlightsButton();
    await headlightsPage.addItemToCart();
    await headlightsPage.viewShoppingCart();
    await shoppingCartPage.proccedToCheckout();
});