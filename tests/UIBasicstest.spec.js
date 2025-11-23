const {test} = require('@playwright/test');


//Toto je struktura playwright testu

test('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/");

});

test('Page Playwright test', async ({page})=>
{

    await page.goto("https://google.com");

});