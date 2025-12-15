const {test, expect} = require('@playwright/test');



test.only('Browser Context-validation Error Login', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title("Let's Shop"));
    await page.locator("#userEmail").fill("francu@seznam.cz");
    await page.locator("#userPassword").fill("Patrikjeboss125!");
    await page.locator("#login").click();
    
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    
}
);
