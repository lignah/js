const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://<link>', { waitUntil: 'networkidle2' });

  const titles = await page.evaluate(new Function(`
    return Array.from(document.querySelectorAll('span.sc-86b147bc-0.gIOkaZ.sc-d200d649-1.dKCwbm')).map(e => e.textContent.trim());
  `));

  console.log('title:', titles);
  console.log("press Enter to exit..");

  await browser.close();
})();

process.stdin.on("data", () => {
  process.exit(0);
});
/**
 * npx pkg crawler.js --targets node18-win-x64
 */