import { test, expect, chromium } from '@playwright/test';

test('IntelliBridge Enterprise Validation for Defect Escape Rate', async ({page}, testInfo) => {
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
  await page1.waitForTimeout (5000);
  await page1.getByRole('button', { name: 'Defect Escape Rate' }).click();
  await page1.locator('div').filter({ hasText: /^BusinessesSelect\.\.\.$/ }).locator('svg').click();
  await page1.getByRole('option', { name: 'Enterprise Informatics' }).click();
  await page1.locator('div').filter({ hasText: /^Business UnitsSelect\.\.\.$/ }).locator('svg').click();
  await page1.getByRole('option', { name: 'CI&I' }).click();
  await page1.locator('div:nth-child(4) > .css-b62m3t-container > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
  await page1.getByRole('option', { name: 'IntelliBridge Enterprise' }).click();
  await page1.waitForTimeout (20000);
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'IntelliBridge Enterprise_Defect_Escape_Rate/png' 
    }
    )
  await page1.locator('div').filter({ hasText: /^ReleaseSelect\.\.\.$/ }).locator('svg').click();
  await page1.getByRole('option', { name: 'B.19.00.005' }).click();
  await page1.getByRole('button', { name: 'Submit' }).click();
  await page1.waitForTimeout (20000);
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'IntelliBridge Enterprise_Defect_Escape_Rate_Release/png' 
    }
    )
  await page1.locator('.main-container').click();
  await page1.getByLabel('Formula').click(); 
  console.log("-----------------------------------------------------------------------");
  console.log("IntelliBridge Enterprise Validation for Defect Escape Rate is completed successfully");
  console.log("-----------------------------------------------------------------------");
  await browser.close();
  });