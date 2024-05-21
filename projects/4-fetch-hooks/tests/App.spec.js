// @ts-check
import { test, expect } from '@playwright/test';

const PREFIX = 'https://cataas.com'
const LOCAL_HOST = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST);

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await img.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(PREFIX)).toBeTruthy()
});

