import { test, expect } from '@playwright/test';

test('Defect MTTR for Program ROCC', async ({ page  },testInfo) => {
  await page.goto('https://www.metrics-portal.philips.com/program_board');
  //await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVJNT8MgGP4rDXdKYW3ZyLpkuoNL%2FFjc9ODF0I5aEgqVl1r993abi%2FPimYfn852DbE0nln1o7KN67xWE6LM1FsTxoUC9t8JJ0CCsbBWIUInt8u5WsDgRnXfBVc6gaAmgfNDOXjsLfav8VvkPXamnx9sCNSF0IAgZhiFuVfC6Atw5H6SJu0Yb3UFcuZaMbJ9fZNvosnRGhSYGcOSgxcjmYbtD0Wo0p608yPySGvembdzqyjtwdXDWaKuOfFSmCZdsj3nOM5zuKcfTfMZwOZEVm2aTJFcpOaRkKFqvCvSa1ZRPZtO0zPmEy5pls3xWU8pyzmvG0myEAfRqbSFIGwrEEpbihGOa7CgVdCqS%2FAVFm59SrrTda%2Fv2f4PlCQTiZrfb4FPMZ%2BXhGHEEoMX84FAchf3FMv%2FTyvMcaHHuSY4L%2Bw6PJe%2BxHGA0fVn%2BnFzInDQ7cT%2FyrlcbZ3T1FS2NccO1VzKoAlFEFqcvf09n8Q0%3D&RelayState=ss%3Amem%3A366a316c9432eb5ade69102f9fe96f303186b982a34b13edcffcfe8d83cf3b98');
  //await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVJNT8MgGP4rDXdKYW3ZyLpkuoNL%2FFjc9ODF0I5aEgqVl1r993abi%2FPimYfn852DbE0nln1o7KN67xWE6LM1FsTxoUC9t8JJ0CCsbBWIUInt8u5WsDgRnXfBVc6gaAmgfNDOXjsLfav8VvkPXamnx9sCNSF0IAgZhiFuVfC6Atw5H6SJu0Yb3UFcuZaMbJ9fZNvosnRGhSYGcOSgxcjmYbtD0Wo0p608yPySGvembdzqyjtwdXDWaKuOfFSmCZdsj3nOM5zuKcfTfMZwOZEVm2aTJFcpOaRkKFqvCvSa1ZRPZtO0zPmEy5pls3xWU8pyzmvG0myEAfRqbSFIGwrEEpbihGOa7CgVdCqS%2FAVFm59SrrTda%2Fv2f4PlCQTiZrfb4FPMZ%2BXhGHEEoMX84FAchf3FMv%2FTyvMcaHHuSY4L%2Bw6PJe%2BxHGA0fVn%2BnFzInDQ7cT%2FyrlcbZ3T1FS2NccO1VzKoAlFEFqcvf09n8Q0%3D&RelayState=ss%3Amem%3A366a316c9432eb5ade69102f9fe96f303186b982a34b13edcffcfe8d83cf3b98&sso_reload=true');
  await page.getByPlaceholder('someone@example.com').click();
  await page.getByPlaceholder('someone@example.com').fill('partner.venkatesh.kadlur@philips.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('Cloud@0046');
  //await page.locator('#i0118').press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout (20000);
  await page.getByRole('link', { name: 'SW Development KPI Dashboard' }).click();
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'ProgramDashboard/png' 
    }
    )
  await page.getByText('Home').click();
  await page.getByRole('button', { name: 'Defects Mean Time To Resolve' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page.getByRole('option', { name: 'Enterprise Informatics' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page.getByRole('option', { name: 'PCI' }).click();
  await page.locator('div:nth-child(4) > .css-b62m3t-container > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
  await page.getByRole('option', { name: 'ROCC' }).click();
  await page.getByLabel('Formula').click();
  await page.locator('.MuiBackdrop-root').click();
  console.log("Formula click");
  await page.getByLabel('Formula').click();
  await page.locator('.MuiBackdrop-root').click();
  console.log("Formula click");
  await page.getByLabel('Formula').click();
  await page.locator('.MuiBackdrop-root').click();
  console.log("Formula click");
  await page.locator('div:nth-child(5) > .css-b62m3t-container > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
  await page.getByRole('option', { name: 'Field Issue' }).click();
  //await page.getByLabel('Formula').click();
  //await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('img').isVisible();
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'Field issue Graph/png' 
    }
    )
  console.log("-----------------------------------------------------------------------");
  console.log("Validation test passed for Field Issue graph");
  console.log("-----------------------------------------------------------------------");
 
  await page.getByRole('link', { name: 'SW Development KPI Dashboard' }).click();
  await page.getByRole('button', { name: 'Defects Mean Time To Resolve' }).click();
  await page.locator('div').filter({ hasText: /^BusinessesSelect\.\.\.$/ }).locator('svg').click();
  await page.getByRole('option', { name: 'Enterprise Informatics' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page.getByRole('option', { name: 'PCI' }).click();
  await page.locator('div').filter({ hasText: /^ProgramSelect\.\.\.$/ }).locator('svg').click();
  await page.getByRole('option', { name: 'ROCC' }).click();
  await page.locator('div').filter({ hasText: /^Defect OriginField Issue$/ }).locator('svg').click();
  await page.getByRole('option', { name: 'Engineering Issue' }).click();
  await page.getByLabel('Formula').click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('img').isVisible();
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'Engineering Issue Graph/png' 
    }
    )
  console.log("-----------------------------------------------------------------------");
  console.log("Validation test passed for Engineering issue graph");
  console.log("-----------------------------------------------------------------------");
});