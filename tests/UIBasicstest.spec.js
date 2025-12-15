const {test, expect} = require('@playwright/test');


//Toto je struktura playwright testu

test('Browser Context Playwright test', async ({browser})=>
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
// ÚKOL UDELAT!!
    //type, fill - v nové verzi playwrightu se doporučuje fill místo type!

});

test('Assigments 1 Playwright test', async ({browser})=>
{       
        const context = await browser.newContext();
        const page = await context.newPage();
        const userEmail = page.locator("#userEmail");
        
        await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
        console.log(await page.title());
        await expect(page).toHaveTitle("Let's Shop");
        await page.locator("#firstName").fill("Patrik");
        await page.locator("#lastName").fill("Fitzpatrik");
        await userEmail.fill("testing6969769@seznam.cz");
        await page.locator("#userMobile").fill("1295567891");
        await page.locator('input[type="radio"][value="Male"]').check();
        await page.locator('[formcontrolname="occupation"]').selectOption('Student');
        await page.locator("#userPassword").fill("Test1234!");
        await page.locator("#confirmPassword").fill("Test1234!");
        await page.locator("input[type='checkbox']").check();
        await page.locator("#login").click(); //Dokoncit registraci
        
        await page.locator(".btn.btn-primary").click();
        
        await userEmail.fill("francupatrik@seznam.cz");
        await page.locator("#userPassword").fill("Test1234!");
        await page.locator("#login").click();
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash"); //Dokončit přihlášení
        
        await page.locator('.card');
        console.log(await page.locator('.card').count());
        console.log(await page.locator('.card').nth(0).textContent());
        }

);



test('UI Controls', async ({page})=>
{
const UserName= page.locator("#username");
const SignIn = page.locator("#signInBtn");
const DropDown = page.locator("select.form-control");
const documentLink = page.locator("[href*='documents-request']");

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await UserName.fill("rahulshettyacademy");

await page.locator("#password").fill("learning");
await DropDown.selectOption("consult");
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
await expect(page.locator(".radiotextsty").last()).toBeChecked(); //assertion
console.log(await page.locator(".radiotextsty").last().isChecked());

await page.locator("#terms").check();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
console.log(await page.locator("#terms").isChecked()); //vypíše false, protože jsme odškrtnuli
expect(await page.locator("#terms").isChecked()).toBeFalsy(); //assertion - očekáváme že to bude false, takže test je PASS

await expect(documentLink).toHaveAttribute("class","blinkingText");
await page.pause();

}


 
);

test.only('Child window hadl', async ({browser})=>
{


const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentLink = page.locator("[href*='documents-request']");

const [newPage] = await Promise.all(
[
context.waitForEvent('page'), //čeká na nové okno - pending, rejected, fulfilled
documentLink.click(),         // otevře se nové okno v prohlížeči)
])

const text = await newPage.locator(".red").textContent();
console.log(text);

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
