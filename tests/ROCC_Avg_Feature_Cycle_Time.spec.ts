import { test, expect, chromium } from '@playwright/test';

test('ROCC Validation for Avg feature cycle time', async ({page}, testInfo) => {
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
  await page1.getByRole('link', { name: 'SW Development KPI Dashboard' }).click();
  await page1.getByText('Home').click();
  await page1.getByRole('button', { name: 'Average Feature Cycle Time' }).click();
  await page1.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page1.getByRole('option', { name: 'Enterprise Informatics' }).click();
  await page1.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page1.getByRole('option', { name: 'PCI' }).click();
  await page1.locator('div:nth-child(4) > .css-b62m3t-container > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
  await page1.getByRole('option', { name: 'ROCC' }).click();
  await page1.getByLabel('Formula').click();
  await page1.waitForTimeout (20000);
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'ROCC_AVG_Feature_Cycle_Time/png' 
    }
    )
  console.log("-----------------------------------------------------------------------");
  console.log("ROCC Validation for Avg feature cycle time is completed successfully");
  console.log("-----------------------------------------------------------------------");
  await browser.close();
});