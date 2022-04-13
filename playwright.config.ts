import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 40000,
  expect: {
    timeout: 50000
  },
  reporter: [
    ['line'],
    ['html', { open: 'never' }]
  ],
  use: {
    actionTimeout: 0,
    baseURL: 'https://miro.com/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        screenshot: 'only-on-failure'
      },
    },
  ],
  outputDir: 'test-results/',
};

export default config;
