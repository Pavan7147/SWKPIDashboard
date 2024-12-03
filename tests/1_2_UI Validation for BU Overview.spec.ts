import { test, expect, chromium } from '@playwright/test';

test('UI Validation for BU overview page', async ({page}, testInfo) => {
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
  //await page.screenshot({ path: './Screenshots/ProgramDashboard1.png' });
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'ProgramDashboard1/png' 
    }
    )
  await page1?.waitForSelector("text=SW Development KPI Dashboard", { state: `visible` });
  const text = await page1.locator("text=SW Development KPI Dashboard").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text);
  //console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=Home", { state: `visible` });
  const hometext = await page1.locator("text=Home").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", hometext);
  //console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=Track, analyze, and optimize", { state: `visible` });
  const text1 = await page1.locator("text=Track, analyze, and optimize").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text1);
  //console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=KEY PROGRAM METRICS", { state: `visible` });
  const text2 = await page1.locator("text= KEY PROGRAM METRICS").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text2);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=Defect Escape Rate", { state: `visible` });
  const text3 = await page1.locator("text= Defect Escape Rate").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text3);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=Software Implementation", { state: `visible` });
  const text4 = await page1.locator("text= Software Implementation").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text4);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=Defects Mean Time To Resolve", { state: `visible` });
  const text5 = await page1.locator("text= Defects Mean Time To Resolve").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text5);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=Average Feature Cycle Time", { state: `visible` });
  const text6 = await page1.locator("text= Average Feature Cycle Time").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text6);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=BUSINESSES / BUSINESS UNITS", { state: `visible` });
  const text7 = await page1.locator("text= BUSINESSES / BUSINESS UNITS").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text7);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=Enterprise Informatics", { state: `visible` });
  const text8 = await page1.locator("text= Enterprise Informatics").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text8);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=CI&I", { state: `visible` });
  const text9 = await page1.locator("text= CI&I").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text9);
  console.log("-----------------------------------------------------------------------");
  await page1?.locator('div').filter({ hasText: /^CI$/ }).isVisible();
  const text10 = await page1.locator('div').filter({ hasText: /^CI$/ }).textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text10);
  console.log("-----------------------------------------------------------------------");
  await page1?.waitForSelector("text=PCI", { state: `visible` });
  const text11= await page1.locator("text= PCI").textContent();
  console.log("-----------------------------------------------------------------------");
  console.log("UI Validation test passed"  ," : ", text11);
  console.log("-----------------------------------------------------------------------");
  await browser.close();
});
