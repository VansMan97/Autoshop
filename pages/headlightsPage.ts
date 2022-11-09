import { expect, Locator, Page } from '@playwright/test';

export class HeadlightsPage{
    public page: Page;
        public firstItem: Locator;
        public cartPopup: Locator;
        public continueShoppingButton: Locator;
        public viewCartButton: Locator;
        public checkoutButton: Locator;
        public closePopup: Locator;

        constructor(page: Page){
            this.page = page;
            this.firstItem = page.locator('button[title="Add Headlight Left for Toyota Landcruiser 200 Series 08/2007-12/2011  to Cart"]');
            this.cartPopup = page.locator('div.header.modal-header');
            this.continueShoppingButton = page.locator('button.btn.btn-default.npopup-continue');
            this.viewCartButton = page.locator('button[title="View Cart"]');
            this.checkoutButton = page.locator('button.btn.btn-success.calltoaction.npopup-checkout');
            this.closePopup = page.locator('a.npopup-btn-close');
        }

        async addItemToCart(){
            await this.firstItem.click();
            await expect(this.cartPopup).toBeVisible();
        };

        async viewShoppingCart(){
            await this.viewCartButton.click();
        };

}
