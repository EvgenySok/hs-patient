
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
            await page.goto(ENV_LOCAL, { waitUntil: 'domcontentloaded' })
        })
        afterAll(async () => {
            await browser.close()
        })

        it('should contain "Patient List of Hospital №1"', async () => {
            await expect(page.evaluate(() =>
                document.body.textContent.includes('Patient List of Hospital №1')))
                .toBeTruthy()
            await page.screenshot({ path: 'screenshot.png', fullPage: true })

        });
    } catch (error) {
        console.log('err!: ' + error)
        return
    }
}

)