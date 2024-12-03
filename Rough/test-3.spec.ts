import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVJNT%2BswEPwrke%2BOHSeNi9VUKvRAJT4qWt7hXZ4cxyWWHDt4HQL%2FnrQF0XfhvLMzOzO7ANnZXqyG2Lon%2FTpoiMl7Zx2I06BCQ3DCSzAgnOw0iKjEbnV%2FJ1hKRR989MpblKwAdIjGuxvvYOh02OnwZpR%2BfrqrUBtjD4KQcRzTTsdgFODehyht2rfGmh5S5Tsysb1%2FkF1r6tpbHdsUwJOjFiPbx90eJevpOOPkUeaH1PoX49LOqODBH6J31jh94stkQblkDeYln%2BGiyTiel1cM17lUbD7LaakLcnTJULJZV%2BgfPxT1XM2Y4jWnRa6zQy5LKhtalo3ieTnBAAa9cRClixVilBWYckzzPeWiyMWs%2FIuS7Vco18Y1xr38nmB9BoG43e%2B3%2BGzzjw5wsjgB0HJxvFCchMNFM7%2FTyu860PI7Jzk1HHo8hdxgOQLO6GX4C3Ihc9bsxcPEu1lvvTXqI1lZ68eboGXUFcoQWZ5X%2Fn%2Bd5Sc%3D&RelayState=ss%3Amem%3A73477abcd318579a2fc88480d30701cc91bb2c675c8d12142b2469c9ec01b17e');
  await page.goto('https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/saml2?SAMLRequest=fVJNT%2BswEPwrke%2BOHSeNi9VUKvRAJT4qWt7hXZ4cxyWWHDt4HQL%2FnrQF0XfhvLMzOzO7ANnZXqyG2Lon%2FTpoiMl7Zx2I06BCQ3DCSzAgnOw0iKjEbnV%2FJ1hKRR989MpblKwAdIjGuxvvYOh02OnwZpR%2BfrqrUBtjD4KQcRzTTsdgFODehyht2rfGmh5S5Tsysb1%2FkF1r6tpbHdsUwJOjFiPbx90eJevpOOPkUeaH1PoX49LOqODBH6J31jh94stkQblkDeYln%2BGiyTiel1cM17lUbD7LaakLcnTJULJZV%2BgfPxT1XM2Y4jWnRa6zQy5LKhtalo3ieTnBAAa9cRClixVilBWYckzzPeWiyMWs%2FIuS7Vco18Y1xr38nmB9BoG43e%2B3%2BGzzjw5wsjgB0HJxvFCchMNFM7%2FTyu860PI7Jzk1HHo8hdxgOQLO6GX4C3Ihc9bsxcPEu1lvvTXqI1lZ68eboGXUFcoQWZ5X%2Fn%2Bd5Sc%3D&RelayState=ss%3Amem%3A73477abcd318579a2fc88480d30701cc91bb2c675c8d12142b2469c9ec01b17e&sso_reload=true');
  await page.getByPlaceholder('someone@example.com').click();
  await page.getByPlaceholder('someone@example.com').fill('partner.venkatesh.kadlur@philips.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('Cloud@0046');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
  await page.goto('https://www.metrics-portal.philips.com/program_board');
  await page.getByRole('button', { name: 'Defect Escape Ratio' }).click();
});