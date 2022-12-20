const{test,expect}=require('@playwright/test');
test('demo login',async({page})=> {
    await page.goto("https://demo.applitools.com/");
    // await page.pause();
    await page.locator("input#username").type("raghav");
    await page.locator("input#password").type("1234");
    await page.locator("a#log-in").click();


});



test('demo login2',async({page})=> {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("[name='username']").type("Admin");
await page.locator("[type='password']").type("admin123");
// await page.locator(".orangehrm-login-forgot").click();
await page.locator("[type='submit']").click();
await page.locator(".oxd-userdropdown-name").click();
await page.locator("[placeholder='Search']").click();
await page.locator("[placeholder='Search']").fill("pranit");

});


test.only('demo login3',async({page})=> {
await page.goto("https://admin-demo.nopcommerce.com/login");
await page.locator("[type='email']").type('admin@yourstore.com');
await page.locator("[type='password']").type("admin");
await page.locator("[class='nav-link active']").click();



});