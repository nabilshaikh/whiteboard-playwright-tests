import { Page } from "@playwright/test";

class Board {

    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    getTemplatePickerModalCloseButton() {
        return this.page.locator('[data-testid="template-picker__close-button"]');
    }

    getToolbarItem(name: string) {
        return this.page.locator(`[data-plugin-id=${name}]`);
    }

    getCanvas() {
        return this.page.locator('canvas').first()
    }

    getEditorBox() {
        return this.page.locator('.ql-editor');
    }

    getShareButton() {
        return this.page.locator('[data-testid="share-board-button"]');
    }

    getTitleInputTextField() {
        return this.page.locator('[data-testid="rename-board-modal__name-input"]');
    }

    getTitleSaveButton() {
        return this.page.locator('[data-testid="rename-board-modal__submit-button"]');
    }

    getShareBoardEditorEmailInputTextField() {
        return this.page.locator('[data-testid="shareMdEmailsEditorInput"] input[type="text"]');
    }

    getShareBoardEditorSendInvitationButton() {
        return this.page.locator('[data-testid="shareMdButtonSend"]');
    }

    verifyToastMessage() {
        return this.page.locator('div[role="alert"]')
    }

    getFitToWindowButton() {
        return this.page.locator('text=Done');
    }

}

export default Board;
