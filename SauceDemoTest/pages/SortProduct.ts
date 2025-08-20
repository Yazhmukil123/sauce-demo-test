import { Page, expect } from '@playwright/test';

export class SortProduct {
     readonly page: Page;

     constructor(page:Page) {
        this.page = page;
    }

    async sortProductNameZtoA(){
        await this.page.locator('[data-test="product-sort-container"]').selectOption('za');
        await expect(this.page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
    }
    async sortProductNameAtoZ(){
        await this.page.locator('[data-test="product-sort-container"]').selectOption('az');
        await expect(this.page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    }

    async sortProductPriceHightoLow(){
        await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
        await expect(this.page.locator('[data-test="inventory-list"]')).toContainText('$49.99');
        await expect(this.page.locator('[data-test="item-5-title-link"]')).toBeVisible();
    }

    async sortProductPriceLowtoHigh(){
        await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
        await expect(this.page.locator('[data-test="inventory-list"]')).toContainText('$7.99');
        await expect(this.page.locator('[data-test="item-2-title-link"]')).toBeVisible();
    }

    

}