const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    recordVideo: {
        dir: "videos"
    }
  });
  const page = await context.newPage();
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6 668 000+ articles' }).click();
  await page.screenshot({path: "wiki_screen.png"});

  // ---------------------
  await context.close();
  await browser.close();
})();