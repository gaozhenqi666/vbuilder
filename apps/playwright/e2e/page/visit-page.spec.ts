import { /* expect, */ test } from '@playwright/test'

test.describe('访问页面测试', () => {
    // 使用全局身份状态
    test('使用全局身份状态，无需登录，访问页面', async ({ page }) => {
        await page.goto('http://localhost:3000')

        // const hasAppHomePage = page.locator('div').getByText('你可能想尝试')
        // const hasNoAppHomePage = page.locator('div').getByText('创建应用')

        // await expect(hasAppHomePage.or(hasNoAppHomePage)).toBeVisible()
    })

    // 使用自定义身份存储状态
    test.use({ storageState: 'storageStates/state.json' })
    test('使用自定义身份，无需登录，访问页面', async ({ page }) => {
        await page.goto('http://localhost:3000')

        // const hasAppHomePage = page.locator('div').getByText('你可能想尝试')
        // const hasNoAppHomePage = page.locator('div').getByText('创建应用')

        // await expect(hasAppHomePage.or(hasNoAppHomePage)).toBeVisible()
    })
})
