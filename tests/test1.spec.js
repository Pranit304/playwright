const { test, expect}= require('@playwright/test');

test('login Page',async ({ page })=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("input#userEmail").type("pranitsalunkhe7@gmail.com");
    await page.locator("#userPassword").type("Pranit123");
    await page.locator("[value='Login']").click();
    const titles=await page.locator(".card-body b").allTextContents();
    console.log(titles);




});

test('UI Controls',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator('["href*=documents-request"]');
    await page.locator("input#username").type("rahulshettyacademy");
    await page.locator("input#password").type("learning");
    await page.locator(".checkmark").click;
    const dropdown=page.locator("select.form-control");
    await dropdown.selectOption("teach");
    await page.locator("input#terms").click();
    await page.locator("#signInBtn").click();
    // await expect(documentLink).toHaveAttribute("class","blinkingText");
   

})