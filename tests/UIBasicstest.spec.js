const {test, expect} = require('@playwright/test');


//Toto je struktura playwright testu

test.only('Browser Context Playwright test', async ({browser})=>
{       
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator("#username");
        const SignIn = page.locator("#signInBtn");
        const cardTitles = page.locator(".card-body a");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
        //css selectory, xpath (xpath je možná ale nedoporučuje se)
        await userName.fill("rahulshetty");
        await page.locator("[type='password']").fill("learning");
        await SignIn.click();
    console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText("Incorrect");
        await userName.fill("");
        await userName.fill("rahulshettyacademy");
        await SignIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    //console.log(await page.locator(".card-body a").first.textContent()); Jiná možnost jak napsat předchozí řádek
    await cardTitles.allTextContents(); //všechny texty z elementů
    const AllTitles = await cardTitles.allTextContents();
    console.log(AllTitles);
// ŮKOL UDALT!!
    //type, fill - v nové verzi playwrightu se doporučuje fill místo type!

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
