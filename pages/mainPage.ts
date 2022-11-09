import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
    public page: Page;
    public loginRegisterLink: Locator;
    public pageLogo: Locator;
    public searchField: Locator;
    public searchButton: Locator;
    public shoppingCartButton: Locator;
    public emptyCartField: Locator;
    public autoLightsMenu: Locator;
    public headlightsButton: Locator;
    public bodyPartsMenu: Locator;
    public electricalMenu: Locator;
    public mechanicalMenu: Locator;
    public coolingMenu: Locator;
    public steeringSuspensionMenu: Locator;
    public accessoriesMenu: Locator;
    public saleButton: Locator;
    public browseByMakeMenu: Locator;
    public makeSelection: Locator;
    public modelSelection: Locator;
    public submodelYearSelection: Locator;
    public goButton: Locator;
    public searchByPopularButton: Locator;
    public autoLightsLink: Locator;
    public bodyPartsLink: Locator;
    public electricalLink: Locator;
    public mechanicalLink: Locator;
    public coolingLink: Locator;
    public steeringSuspensionLink: Locator;
    
        constructor(page: Page){
            this.page = page;
            this.loginRegisterLink = page.locator('a[title="Login"]');
            this.pageLogo = page.locator('a[title="K&W Auto Parts"]');
            this.searchField = page.locator('input#name_search');
            this.searchButton = page.locator('div.header-search >> button');
            this.shoppingCartButton = page.locator('div#header-cart');
            this.emptyCartField = page.locator('div#cartcontents >> font');
            this.autoLightsMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(1)');
            this.headlightsButton = page.locator('a.nav-link.font-weight-bold', {hasText:"Headlights"})
            this.bodyPartsMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(2)');
            this.electricalMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(3)');
            this.mechanicalMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(4)');
            this.coolingMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(5)');
            this.steeringSuspensionMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(6)');
            this.accessoriesMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(7)');
            this.saleButton = page.locator('ul[aria-label="Category menu"] >> a', {hasText:'Sale '});
            this.browseByMakeMenu = page.locator('ul[aria-label="Category menu"] >> li.dropdown:nth-child(9)');
            this.makeSelection = page.locator('select#clist_11_1');
            this.modelSelection = page.locator('select#clist_11_2');
            this.submodelYearSelection = page.locator('select#clist_11_3');
            this.goButton = page.locator('div#compat_list >> button');
            this.searchByPopularButton = page.locator('section#homepageCarousel >> span');
            this.autoLightsLink = page.locator('a.image[href="/auto-lights/"]');
            this.bodyPartsLink = page.locator('a.image[href="/auto-lights/head-lights/"]');
            this.coolingLink = page.locator('a.image[href="/cooling/"]');
            this.mechanicalLink = page.locator('a.image[href="/mechanical/"]');
            this.electricalLink = page.locator('a.image[href="/electrical-parts/"]');
            this.steeringSuspensionLink = page.locator('a.image[href="/steering-suspension/"]');
        }

    async goToMainPage(){
        await this.page.goto('https://www.kwautoparts.com.au/');
    };

    async goToLoginPage(){
        await this.loginRegisterLink.click();
        await expect(this.pageLogo).toBeVisible();
    };

    async openAutolightsMenu(){
        await this.autoLightsMenu.click();
        await expect(this.headlightsButton).toBeVisible();
    };

    async clickHeadlightsButton(){
        await this.openAutolightsMenu();
        await this.headlightsButton.click();
    };
    
    async checkIfCartIsEmpty(){
        await this.shoppingCartButton.click();
        await expect(this.emptyCartField).toHaveText("Your shopping cart is empty. Add items to your cart and they will appear here.");
    };

};
