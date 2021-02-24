
const puppeteer = require('puppeteer')
const faker = require('faker')
const { fields } = require('./patientCreationForm')

describe('Test with Puppeteer', () => {
    let page
    let browser
    let patient
    try {
        beforeAll(async () => {
            patient = {
                surname: faker.name.lastName(),
                name: faker.name.firstName(),
                patronymic: faker.name.firstName(),
                get fullName() {
                    return `${this.surname} ${this.name} ${this.patronymic}`
                },
                sex: ['male', 'female'][Math.floor(Math.random() * 2)],
                datebirth: String(faker.date.past()).slice(1, 16),
                adress: faker.address.streetAddress(),
                policynumber: faker.random.number(),
            }
            try {
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
                await page.goto('http://localhost:8080', { waitUntil: 'domcontentloaded' })
            } catch (error) {
                browser = await puppeteer.launch()
                page = await browser.newPage()
                await page.goto(ENV_LOCAL, { waitUntil: 'domcontentloaded' })
            }

        })

        afterAll(async () => {
            await browser.close()
        })

        it('should contain "Patient List of Hospital №1" on the main page', async () => {
            await expect(await page.evaluate(() =>
                document.body.textContent.includes('Patient List of Hospital №1')))
                .toBeTruthy()
            await page.screenshot({ path: 'screenshot.png', fullPage: true })

        })

        it('should contain buttons "Search", "Show all", "Add patient" with text', async () => {
            await expect(await page.$$eval('button[name="search"]', btn => btn.length === 1 && btn[0].textContent === 'Search'))
                .toBeTruthy()
            await expect(await page.$$eval('button[name="showAll"]', btn => btn.length === 1 && btn[0].textContent === 'Show all'))
                .toBeTruthy()
            await expect(await page.$$eval('button[name="addPatient"]', btn => btn.length === 1 && btn[0].textContent === 'Add patient'))
                .toBeTruthy()
        })

        it(('should contain one h2, one button "submit" and 7 fields, after click button "Add patient"'), async () => {
            await page.click('button[name="addPatient"]')
            await expect(await page.$$eval('h2', h2 => h2.length === 1 && h2[0].textContent === 'Patient creation'))
                .toBeTruthy()
            await expect(await page.$$eval('button[name="form submit"]', btn => btn.length === 1 && btn[0].textContent === 'Submit'))
                .toBeTruthy()
            await expect(await page.$$eval('input[type="text"]', inputs => inputs.length === 7))
                .toBeTruthy()
        })

        it(('should add patient'), async () => {
            const patient = {
                surname: faker.name.lastName(),
                name: faker.name.firstName(),
                patronymic: faker.name.firstName(),
                get fullName() {
                    return `${this.surname} ${this.name} ${this.patronymic}`
                },
                sex: ['male', 'female'][Math.floor(Math.random() * 2)],
                datebirth: String(faker.date.past()).slice(1, 16),
                adress: faker.address.streetAddress(),
                policynumber: faker.random.number(),
            }
            await page.click('button[name="addPatient"]')
            await page.screenshot({ path: 'screenshot.png', fullPage: true })

            const submitSelector = 'button[name="form submit"]'
            const buttonShowAllSelector = 'button[name="showAll"]'

            for (const field of fields) {
                await page.$eval(`input[name=${field}]`, (inputs, patient, field) => inputs.value = patient[field], patient, field)
            }
            await page.waitForTimeout(1000)
            await page.click(submitSelector)
            await page.waitForTimeout(1000)
            await page.click(buttonShowAllSelector)
            await page.waitForTimeout(1000)

            await expect(await page.evaluate((patient) => {
                return document.body.textContent.includes(patient.fullName)
            }, patient))
                .toBeTruthy()

        })

    } catch (error) {
        console.log('err!: ' + error)
        return
    }
}

)