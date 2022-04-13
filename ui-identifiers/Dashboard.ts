import { Page } from "@playwright/test";

class Dashboard {

    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    public getNewBoard() {
        return this.page.locator('[data-testid="dashboard__grid__new-board"]');
    }

    public selectBoard() {
        return this.page.locator('.board-brick__preview__overlay');
    }
}

export default Dashboard;
