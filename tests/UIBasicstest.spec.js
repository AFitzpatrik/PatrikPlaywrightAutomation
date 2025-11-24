const {test, expect} = require('@playwright/test');


//Toto je struktura playwright testu

test('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/");
    console.log(await page.title());

});

test('Page Playwright test', async ({page})=>
{

    await page.goto("https://google.com");

});

test.only('Page only Playwright test', async ({page})=>
{

    await page.goto("https://google.com");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


});
