import { test, expect, chromium } from '@playwright/test';

test('Smoke Test', async ({page}, testInfo) => {
  const browser = await chromium.launch({
    channel: 'msedge', 
    headless: true
  });
  const context = await browser.newContext({
    httpCredentials: {
      username: 'partner.pavan.udagani@philips.com', 
      password: 'RANIpava!@#$7890' 
    }
  })
  const page1 = await context.newPage();
  await page1.goto('https://www.pdp.philips.com/program_board/');
  await page1.waitForTimeout (20000);
  await testInfo.attach("screenshot",
    { body:await page1.screenshot(), 
    contentType: 'Home_Page/png' 
    }
    )
  await page1.getByRole('button', { name: 'Average Feature Cycle Time' }).click();
  await page1.locator('.css-19bb58m').first().click();
  await page1.getByRole('option', { name: 'Enterprise Informatics' }).click();
  await page1.locator('.css-hlgwow > .css-19bb58m').first().click();
  await page1.getByRole('option', { name: 'PCI' }).click();
  await page1.locator('.css-hlgwow > .css-19bb58m').click();
  await page1.getByRole('option', { name: 'ROCC' }).click();
  await page1.waitForTimeout (20000);
  await testInfo.attach("screenshot",
    { body:await page1.screenshot(), 
    contentType: 'Average_Feature_Cycle_Time/png' 
    }
    )
  await page1.getByRole('link', { name: 'SW Development KPI Dashboard' }).click();
  await browser.close();
  
 });