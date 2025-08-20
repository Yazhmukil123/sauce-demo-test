import { Page, expect } from '@playwright/test';
import dontenv from 'dotenv';

export class LoginScenarios {

    readonly page: Page;

     constructor(page:Page) {
        this.page = page;
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL as string);
    }

    async login(username: string, password: string ){
        await this.page.fill("#user-name", username);
        await this.page.fill("#password", password);
        await this.page.click("#login-button");
    }

    async assertValidSuccss(){
        await expect(this.page).toHaveURL(process.env.INVENTORY_URL as string);
    }

    async assertInvalidError(){
        await expect(this.page.locator("//*[@data-test='error-button']")).toBeVisible();
    }
}