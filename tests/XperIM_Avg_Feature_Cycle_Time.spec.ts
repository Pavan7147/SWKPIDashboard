import { test, expect, chromium } from '@playwright/test';

test('XperIM Validation for Avg feature cycle time', async ({page}, testInfo) => {
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
  await page1.getByRole('button', { name: 'Average Feature Cycle Time' }).click();
  await page1.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page1.getByRole('option', { name: 'Enterprise Informatics' }).click();
  await page1.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page1.getByRole('option', { name: 'PCI' }).click();
  await page1.locator('div:nth-child(4) > .css-b62m3t-container > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
  await page1.getByRole('option', { name: 'XPer IM' }).click();
  await page1.locator('div').filter({ hasText: /^Start Date$/ }).getByPlaceholder('Select a date').click();
  await page1.getByPlaceholder('Select a date').first().fill('01/01/2022');
  await page1.getByLabel('Choose Saturday, January 1st,').click();
  await page1.getByLabel('Formula').click();
  await page1.locator('div').filter({ hasText: 'Sum of the cycle time of each' }).nth(1).click();
  await page1.getByText('Average feature cycle time =').click();
  await page1.locator('.MuiBackdrop-root').click();
  await page1.waitForTimeout (20000);
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'XperIM_Avg_Feature_Cycle_Time/png' 
    }
    )
  console.log("-----------------------------------------------------------------------");
  console.log("XperIM Validation for Avg feature cycle time is completed successfully");
  console.log("-----------------------------------------------------------------------");
  await browser.close();
});