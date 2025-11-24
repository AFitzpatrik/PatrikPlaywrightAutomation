const {test, expect} = require('@playwright/test');


//Toto je struktura playwright testu

test.only('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    //css selectory, xpath (xpath je možná ale nedoporučuje se)
    await page.locator("#username").fill("rahulshetty")
    await page.locator("[type='password']").fill("learning")
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());


    //type, fill - v nové verzi playwrightu se doporučuje fill místo type

});

test('Page Playwright test', async ({page})=>
{

    await page.goto("https://seznam.cz");
    console.log(await page.title());

});

test('Page only Playwright test', async ({page})=>
{

    await page.goto("https://google.com");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


});
