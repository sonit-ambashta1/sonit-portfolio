export default {
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: 'http://localhost:5173',
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'mobile',
      use: { viewport: { width: 360, height: 800 } },
    },
    {
      name: 'tablet',
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: 'desktop',
      use: { viewport: { width: 1280, height: 800 } },
    },
  ],
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'reports/playwright-report' }],
  ],
};
