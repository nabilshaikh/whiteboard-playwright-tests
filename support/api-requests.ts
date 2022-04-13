const { request } = require('@playwright/test');

export async function deleteBoard(boardID: string) {
  const context = await request.newContext({
    baseURL: 'https://api.miro.com',
  });
  await context.delete('/v1/boards/'+boardID, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  });
}
