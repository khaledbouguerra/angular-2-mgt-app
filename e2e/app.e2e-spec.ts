import { NagularPage } from './app.po';

describe('nagular App', () => {
  let page: NagularPage;

  beforeEach(() => {
    page = new NagularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
