import { test, expect } from '@playwright/test';

test('Login to Program Dashboard and verify the home page UI', async ({ page  },testInfo) => {
  await page.goto('https://www.metrics-portal.philips.com/program_board');
  //await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVLLbtswEPwVgXeKIvVyCMuAEx9qIG2N2O2hl2BF0xEBilS5VJX8fWU7Qd1Lzjs7szOzS4TeDnI9xs496d%2Bjxpi89tahvAwaMgYnPaBB6aDXKKOS%2B%2FXXRynSTA7BR6%2B8JckaUYdovHvwDsdeh70Of4zSP54eG9LFOKBkbJqmtNcxGIV08CGCTYfOWDNgqnzPZrbXN7bvTNt6q2OXInp21hJs931%2FIMlmPs44OMv8I7X%2Bxbi0Nyp49KfonTVOX%2Fg4FFkN4kjrqi5pceQ1XVR3grY5KLEo86zSBTu7FCTZbhrynJWqrQFKUVelyhenIl9UtTjx8gQcSnU3wxBHvXUYwcWGiEwUNKtpJg68lDmXgv8iye49lHvjjsa9fJ5gewWh%2FHI47OjV5k8d8GJxBpDV8nyhvAiHm2Y%2Bp4WPOsjqIyeYGw4DnUM%2BUpiQ8uw2%2FCW7kblqDvLbzLvd7Lw16i1ZW%2Bunh6Ah6oZwwlbXlf9fZ%2FUX&RelayState=ss%3Amem%3Af91db69f2af43fe8596f4f2de6332d71d3d4ef0fdcc80ae43ad694c180a536d3');
  //await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVLLbtswEPwVgXeKIvVyCMuAEx9qIG2N2O2hl2BF0xEBilS5VJX8fWU7Qd1Lzjs7szOzS4TeDnI9xs496d%2Bjxpi89tahvAwaMgYnPaBB6aDXKKOS%2B%2FXXRynSTA7BR6%2B8JckaUYdovHvwDsdeh70Of4zSP54eG9LFOKBkbJqmtNcxGIV08CGCTYfOWDNgqnzPZrbXN7bvTNt6q2OXInp21hJs931%2FIMlmPs44OMv8I7X%2Bxbi0Nyp49KfonTVOX%2Fg4FFkN4kjrqi5pceQ1XVR3grY5KLEo86zSBTu7FCTZbhrynJWqrQFKUVelyhenIl9UtTjx8gQcSnU3wxBHvXUYwcWGiEwUNKtpJg68lDmXgv8iye49lHvjjsa9fJ5gewWh%2FHI47OjV5k8d8GJxBpDV8nyhvAiHm2Y%2Bp4WPOsjqIyeYGw4DnUM%2BUpiQ8uw2%2FCW7kblqDvLbzLvd7Lw16i1ZW%2Bunh6Ah6oZwwlbXlf9fZ%2FUX&RelayState=ss%3Amem%3Af91db69f2af43fe8596f4f2de6332d71d3d4ef0fdcc80ae43ad694c180a536d3&sso_reload=true');
  await page.getByLabel('someone@example.com').fill('partner.venkatesh.kadlur@philips.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('Cloud@0046');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout (20000);
  await page?.waitForSelector("text=SW Development KPI Dashboard", { state: `visible` })
  //await page.screenshot({ path: './Screenshots/dashboard.png' });
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'Dashboard/png' 
    }
    )
  console.log("-----------------------------------------------------------------------");
  console.log(" UI check for program dashboard link : successful");
  console.log("-----------------------------------------------------------------------");
  await page.getByRole('button', { name: 'Defect Escape Ratio' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page.getByRole('option', { name: 'Enterprise Informatics' }).click();
  //await page.locator('div').filter({ hasText: /^Business GroupSelect\.\.\.$/ }).locator('svg').click();
  await testInfo.attach("screenshot",
    { body:await page.screenshot(), 
    contentType: 'Business GroupSelect/png' 
    }
    )
  await page.screenshot({ path: './Screenshots/BusinessGroupSelect.png' });
  await page.locator('div').filter({ hasText: /^ProgramSelect\.\.\.$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^Business UnitsCI$/ }).locator('svg').nth(2).click();
  await page.getByRole('option', { name: 'CI&I' }).click();
  await page.getByLabel('Remove CI', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^ProgramSelect\.\.\.$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^Business UnitsCI&I$/ }).locator('svg').nth(2).click();
  await page.locator('div').filter({ hasText: /^ProgramSelect\.\.\.$/ }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^Business UnitsCI&I$/ }).locator('svg').nth(2).click();
  await page.getByRole('option', { name: 'PCI' }).click();
  await page.getByLabel('Remove CI&I').click();
  await page.locator('div').filter({ hasText: /^ProgramSelect\.\.\.$/ }).locator('svg').click();
  await page.getByRole('option', { name: 'ROCC' }).click();
  await page.getByRole('img').click({
    position: {
      x: 578,
      y: 182
    }
  });
});