import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVLLbtswEPwVgXfqSUsyYRlw40MNpIkRuz30UtDkOiJAkSqXipK%2Fj2QnqHvJeWdndmZ2haIzPd8MobVP8HcADNFrZyzyy6Ahg7fcCdTIregAeZD8sPlxz%2FM45b13wUlnSLRBBB%2B0s3fO4tCBP4B%2F0RJ%2BPt03pA2hR54k4zjGHQSvJdLe%2BSBM3Lfa6B5j6bpkYnt9Sw6tPp2cgdDGiC6ZtfJk%2F3g4kmg7HaetmGX%2BkRr3rG3caekdunNw1mgLF75MsLQSuaJVWS0oU1lF63KZ01MhZF4virQElswucxLttg35s6gVACvqsq7OaillUSq2VGcm6pQpWM4wxAF2FoOwoSF5mjOaVjQrjhnjRcbT7DeJ9h%2BhfNNWafv8dYKnKwj59%2BNxT682f4HHi8UJQNar%2BUJ%2BEfY3zXxNKz7rIOvPnMTUsO%2FpFLKiYkSapbfhr5Ibmatmzx8m3t1274yWb9HGGDfeeRABGpKRZH1d%2Bf911u8%3D&RelayState=ss%3Amem%3Ac5c2b7561697622df2a0e7355a4dae7d73e6d3111b37e95bcca8ef41c7da6d05');
  await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVLLbtswEPwVgXfqSUsyYRlw40MNpIkRuz30UtDkOiJAkSqXipK%2Fj2QnqHvJeWdndmZ2haIzPd8MobVP8HcADNFrZyzyy6Ahg7fcCdTIregAeZD8sPlxz%2FM45b13wUlnSLRBBB%2B0s3fO4tCBP4B%2F0RJ%2BPt03pA2hR54k4zjGHQSvJdLe%2BSBM3Lfa6B5j6bpkYnt9Sw6tPp2cgdDGiC6ZtfJk%2F3g4kmg7HaetmGX%2BkRr3rG3caekdunNw1mgLF75MsLQSuaJVWS0oU1lF63KZ01MhZF4virQElswucxLttg35s6gVACvqsq7OaillUSq2VGcm6pQpWM4wxAF2FoOwoSF5mjOaVjQrjhnjRcbT7DeJ9h%2BhfNNWafv8dYKnKwj59%2BNxT682f4HHi8UJQNar%2BUJ%2BEfY3zXxNKz7rIOvPnMTUsO%2FpFLKiYkSapbfhr5Ibmatmzx8m3t1274yWb9HGGDfeeRABGpKRZH1d%2Bf911u8%3D&RelayState=ss%3Amem%3Ac5c2b7561697622df2a0e7355a4dae7d73e6d3111b37e95bcca8ef41c7da6d05&sso_reload=true');
  await page.getByLabel('someone@example.com').fill('partner.venkatesh.kadlur@philips.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('Cloud@0046');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
  await page.goto('https://www.metrics-portal.philips.com/program_board');
  await page.getByRole('button', { name: 'Software Implementation' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page.getByRole('option', { name: 'Enterprise Informatics' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page.getByRole('option', { name: 'PCI' }).click();
  await page.locator('div:nth-child(4) > .css-b62m3t-container > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click();
  await page.getByRole('option', { name: 'ROCC' }).click();
  await page.getByLabel('Formula').click();
  await page.locator('div').filter({ hasText: 'Verification defects = Count' }).nth(1).click();
  await page.getByText('Field defects = Count of').click();
  await page.getByText('Field defects = Count of').click();
  await page.getByText('Field defects = Count of').click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('img').click({
    position: {
      x: 567,
      y: 99
    }
  });
});