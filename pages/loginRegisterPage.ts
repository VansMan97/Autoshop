import { expect, Locator, Page } from '@playwright/test';

export class LoginRegisterPage{
    public page: Page;
    public pageLogo: Locator;
    public loginEmail: Locator;
    public loginPassword: Locator;
    public loginButton: Locator;
    public myAccount: Locator;
    public nameField: Locator;
    public surnameField: Locator;
    public registrationEmail: Locator;
    public registrationPassword: Locator;
    public confirmPassword: Locator;
    public newsletterCheck: Locator;
    public termsCheck: Locator;
    public registerButton: Locator;

        constructor(page: Page){
            this.page = page;
            this.pageLogo = page.locator('img.logo');
            this.loginEmail = page.locator('input#username');
            this.loginPassword = page.locator('input#password');
            this.loginButton = page.locator('button', {hasText:"Login Now"});
            this.myAccount = page.locator('span.visible-lg.visible-inline-lg');
            this.nameField = page.locator('input[name="reg_bill_first_name"]');
            this.surnameField = page.locator('input#reg_last_name');
            this.registrationEmail = page.locator('input#reg_email');
            this.registrationPassword = page.locator('input#reg_password');
            this.confirmPassword = page.locator('input#reg_password2');
            this.newsletterCheck = page.locator('input[name="regoptin"]');
            this.termsCheck = page.locator('input.terms_box', {hasText:"I have read and agree to"});
            this.registerButton = page.locator('button', {hasText:"Register and Continue"});
        }

    async returnToMainPage(){
        await this.pageLogo.click();
    };
    
    async enterLoginEmail(email){
        await this.loginEmail.click();
        await this.loginEmail.fill(email)
    };

    async enterPassword(password){
        await this.loginPassword.click();
        await this.loginPassword.fill(password);
    };

    async clickLoginButton(){
        await this.loginButton.click();
        await expect(this.myAccount).toBeVisible();
    };
    
    async enterName(name: string){
        await this.nameField.click();
        await this.nameField.fill(name);
    };

    async enterSurname(surname: string){
        await this.surnameField.click();
        await this.surnameField.fill(surname);
    };

    async enterRegistrationEmail(email: string){
        await this.registrationEmail.click();
        await this.registrationEmail.fill(email);
    };

    async enterAndConfirmPassword(password: string){
        await this.registrationPassword.click();
        await this.registrationPassword.fill(password);
        await this.confirmPassword.click();
        await this.confirmPassword.fill(password)
    };

    async agreeToConditions(){
        await this.termsCheck.click();
        await expect(this.termsCheck).toBeChecked();
    };

    async clickRegister(){
        await this.registerButton.click();
    };

}