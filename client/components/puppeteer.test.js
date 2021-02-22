
const puppeteer = require('puppeteer')

describe('Test', () => {
    let page
    let browser
    try {
        beforeAll(async () => {
            browser = await puppeteer.launch({
                executablePath: '/usr/bin/chromium-browser',
                args: [
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--disable-setuid-sandbox',
                    '--no-first-run',
                    '--no-sandbox',
                    '--no-zygote',
                    '--single-process',
                ]
            })
            page = await browser.newPage()
            await page.goto('http://localhost:8080/', { waitUntil: 'domcontentloaded' })
        })

        //   const browser = await puppeteer.launch({
        //       args: chrome.args,
        //       executablePath: await chrome.executablePath,
        //       headless: chrome.headless,
        //   })
        it('should be titled "Google"', async () => {
                await expect(page.evaluate(() =>
                    document.body.textContent.includes('Patient List of Hospital №1')))
                    .toBeTruthy()
            // await expect(page.title()).resolves.toMatch('Google');
            await page.screenshot({ path: 'screenshot.png', fullPage: true })

        });
    } catch (error) {
        console.log('err!: ' + error)
        return
    }
}

)