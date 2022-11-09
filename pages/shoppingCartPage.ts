import { expect, Locator, Page } from '@playwright/test';

export class ShoppingCartPage{
    public page: Page;
    public cartIsEmpty: Locator;
    public checkoutButton: Locator;
    public quantityField: Locator;
    public deleteItemButton: Locator;
    public continueShopping: Locator;
    public updateChangesButton: Locator;
    public cartTotalfield: Locator;
    
        constructor(page: Page){
            this.page = page;
            this.cartIsEmpty = page.locator('div#main-content >> div >> div:nth-child(2) >> h1');
            this.checkoutButton = page.locator('button[title="Checkout Now"]');
            this.quantityField = page.locator('input#qty0');
            this.deleteItemButton = page.locator('i.far.fa-trash-alt');
            this.continueShopping = page.locator('button[title="Continue shopping"]');
            this.updateChangesButton = page.locator('button[title="Update changes"]');
            this.cartTotalfield = page.locator('p.h3');
        };

        async emptyCartCheck(){
            await this.page.goto('https://www.kwautoparts.com.au/_mycart?tkn=cart&ts=1667925310619579');
            await expect(this.cartIsEmpty).toBeVisible();
        };

        async deleteItem(){
            await this.deleteItemButton.click();
            await expect(this.cartIsEmpty).toBeVisible();
        };

        async proccedToCheckout(){
            await this.checkoutButton.click();
        };

};