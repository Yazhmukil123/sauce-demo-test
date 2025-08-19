import { test} from "@playwright/test";
import { LoginScenarios } from "../pages/LoginScenarios";
import { SortProduct } from "../pages/SortProduct";
import { CheckoutProcess } from "../pages/CheckoutProcess";

let context;
let page;
let sortProduct;
let checkoutProcess;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext({
		ignoreHTTPSErrors: true
	});
	page = await context.newPage();

    const loginPage = new LoginScenarios(page);
    const credentials = [
        {username: "wrong_1", password: "wrong_1"},
        {username: "standard_user", password: "wrong_1"},
        {username: "wrong_1", password: "secret_sauce"},
        {username: "standard_user", password: "secret_sauce"},
    ]

    let success = false;
    let attempt = 0;

    await loginPage.goto();

    while (!success && attempt < credentials.length) {
        const { username, password } = credentials[attempt];
        try {
            await loginPage.login(username, password);
            await loginPage.assertValidSuccss();
            success = true;
        } catch (error) {
            await loginPage.assertInvalidError();
            attempt ++;
            await loginPage.goto();
        }
    }

    if (!success) {
        throw new Error("all attemps are failed!");
    }

    sortProduct = new SortProduct(page);
    checkoutProcess = new CheckoutProcess(page);
});
test.afterAll(async () => {
  await context.close();
});

test("Sort product", async ()=> {
    await sortProduct.sortProductNameZtoA();
    await sortProduct.sortProductNameAtoZ();
    await sortProduct.sortProductPriceHightoLow();
    await sortProduct.sortProductPriceLowtoHigh();
});

test("Checkout process", async ()=> {
    await checkoutProcess.addToCart();
    await checkoutProcess.shoppingCart();
    await checkoutProcess.checkOutInformations();
    await checkoutProcess.finishOrder();
})
