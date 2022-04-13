import { user1Login, user2Login } from "../support/common-methods";
import Board from "../ui-identifiers/Board";
import Dashboard from '../ui-identifiers/Dashboard';
import { deleteBoard } from "../support/api-requests";
const { test, expect } = require('@playwright/test');
require('dotenv').config();

let dashboard: Dashboard;
let board: Board;
let url: string

const options = {
  path: 'snapshots/sticker.png',
  fullPage: false,
  clip: {
    x: 300,
    y: 100,
    width: 650,
    height: 450
  }
}

test.describe('Share a board', () => {
  
  test('User2 sees a newly created sticker (widget) shared by User1', async ({ browser }) => {

    // User1 shares a sticker with User2
    const user1Page = await user1Login(browser);
    dashboard = await new Dashboard(await user1Page);
    board = await new Board(await user1Page);
    await dashboard.getNewBoard().click();
    await board.getTemplatePickerModalCloseButton().click();
    await board.getToolbarItem('STICKERS').click();
    await board.getCanvas().click({ position: { x: 872, y: 506 } });
    await board.getEditorBox().fill('Note');
    await board.getShareButton().click();
    await board.getTitleInputTextField().click();
    await board.getTitleInputTextField().press('Meta+a');
    await board.getTitleInputTextField().fill('Board');
    await board.getTitleSaveButton().click();
    await board.getShareBoardEditorEmailInputTextField().dblclick();
    await board.getShareBoardEditorEmailInputTextField().fill('nabilshaikh26+t2@gmail.com');
    await board.getShareBoardEditorEmailInputTextField().press('Enter')
    await board.getShareBoardEditorSendInvitationButton().click();
    expect(board.verifyToastMessage()).toHaveText('Invitation sent');
    await board.getFitToWindowButton().click();

    // User2 sees a sticker shared by User1
    const user2Page = await user2Login(browser);
    dashboard = await new Dashboard(await user2Page);
    await dashboard.selectBoard().click();
    await expect(user2Page.locator('.all-widgets-loaded')).toBeVisible();
    url = await user2Page.url();
    await user2Page.screenshot(options)
    expect(await user2Page.screenshot(options)).toMatchSnapshot('sticker.png', { threshold: 0.5 })
  });

  test.afterEach(async () => {
    const boardID = new URL(url).pathname.split('/')[3];
    await deleteBoard(boardID);
  });
});
